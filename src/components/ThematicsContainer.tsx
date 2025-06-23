'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import thematicsData from '@/data/thematics.json';
import menuData from '@/data/menu.json';

declare global {
  interface Window {
    $: typeof import('jquery');
  }
}

export default function ThematicsContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const initializeThematics = useCallback(() => {
    if (!window.$ || !containerRef.current) return;

    const $ = window.$;
    const thematics = [...thematicsData.thematics].reverse();

    // Shuffle the thematics
    for (let i = thematics.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [thematics[i], thematics[j]] = [thematics[j], thematics[i]];
    }

    // Setup thematics immediately
    setupThematics(thematics);

    // Title click handler for reset
    $('#title').on('click', function() {
      $('.thematic').removeClass('activated').css({
        top: 'calc(50vh - 100px)',
        left: 'calc(50vw - 100px)',
      });
    });

    // About link click handler
    $('#about-link').on('click', function() {
      const content = thematicsData.about;
      setModalContent(content);
      setIsModalOpen(true);
    });

    // Mouse enter handler for progressive drag activation
    $(containerRef.current).on('mouseenter', '.thematic', function() {
      $(this).addClass('activated');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ($(this) as any).draggable({
        snap: true,
        containment: '#thematics-container',
        stack: '.thematic',
      });
    });

    // Click handler for text-to-speech
    // $(containerRef.current).on('click', '.thematic', function() {
    //   const quote = $(this).text();
    //   const msg = new SpeechSynthesisUtterance(quote);
    //   msg.voice = getRandomVoice();
    //   window.speechSynthesis.speak(msg);
    // });
  }, []);

  useEffect(() => {
    // Load jQuery and jQuery UI dynamically
    const loadJQuery = async () => {
      if (typeof window !== 'undefined' && typeof window.$ === 'undefined') {
        // Load jQuery
        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
        jqueryScript.onload = () => {
          // Load jQuery UI CSS
          const jqueryUICSS = document.createElement('link');
          jqueryUICSS.rel = 'stylesheet';
          jqueryUICSS.href = 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css';
          document.head.appendChild(jqueryUICSS);

          // Load jQuery UI
          const jqueryUIScript = document.createElement('script');
          jqueryUIScript.src = 'https://code.jquery.com/ui/1.12.1/jquery-ui.js';
          jqueryUIScript.onload = () => {
            // Load touch punch for mobile support
            const touchPunchScript = document.createElement('script');
            touchPunchScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js';
            touchPunchScript.onload = () => {
              initializeThematics();
            };
            document.head.appendChild(touchPunchScript);
          };
          document.head.appendChild(jqueryUIScript);
        };
        document.head.appendChild(jqueryScript);
      } else if (typeof window.$ !== 'undefined') {
        initializeThematics();
      }
    };

    loadJQuery();
  }, [initializeThematics]);

  const setupThematics = (thematics: typeof thematicsData.thematics) => {
    if (!containerRef.current) return;

    thematics.forEach((thematic) => {
      const newDiv = document.createElement('div');
      newDiv.className = 'thematic';
      
      const title = `<strong>${thematic.title}</strong>`;
      const subtitle = thematic.subtitle ? `<span class="thematic-subtitle">${thematic.subtitle}</span>` : '';
      const description = `<p class="thematic-description">${thematic.description}</p>`;

      newDiv.innerHTML = `${title}${subtitle}${description}`;
      containerRef.current?.appendChild(newDiv);
    });
  };

  // const getRandomVoice = () => {
  //   const availableVoices = window.speechSynthesis.getVoices();
  //   const filteredVoices = availableVoices.filter(function(voice: SpeechSynthesisVoice) {
  //     return (voice.lang.includes('en') && (voice.name.includes('Male') || voice.name.includes('Female')));
  //   });
  //   const randomIndex = Math.floor(Math.random() * filteredVoices.length);
  //   return filteredVoices[randomIndex];
  // };

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center p-6 z-0">
      <div className="header-container">
        <div id="title">
          <strong>{thematicsData.title}</strong>
          <br />
          <span className="subtitle">by {thematicsData.author}</span>
        </div>
        <div id="menu" className="menu">
          <ul>
            {menuData.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  id={item.type === 'modal' ? 'about-link' : undefined}
                  {...(item.type !== 'modal' && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div 
        id="thematics-container"
        ref={containerRef}
        className="relative w-full h-full flex flex-col items-center justify-center p-6 z-0"
      >
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <div dangerouslySetInnerHTML={{ __html: modalContent }} />
          </div>
        </div>
      )}
    </div>
  );
} 