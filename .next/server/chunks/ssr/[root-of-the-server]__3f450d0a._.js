module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/data/thematics.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"title\":\"Thematics\",\"author\":\"Listen.codes\",\"thematics\":[{\"title\":\"Functional Hydration\",\"subtitle\":\"Consumer Products\",\"description\":\"We're excited about the growing trend of functional beverages, in particular, the emerging lifestyle hydration and electrolytes market, and the ready-to-drink form factor.\"},{\"title\":\"Compounded Medicine\",\"subtitle\":\"Consumer Health\",\"description\":\"We're excited about compounded products as a new way to deliver personalized healthcare via digital platforms, disrupting telehealth leaders with novel + more effective products.\"},{\"title\":\"Minor Cannabinoids\",\"subtitle\":\"Consumer Products\",\"description\":\"We're excited about minor cannabinoids for precise effects and health benefits, exploring formats and sub-categories easing consumer and regulator adoption.\"},{\"title\":\"“—ine” Revolution\",\"subtitle\":\"Consumer Products\",\"description\":\"We're excited about the caffe-INE, nicot-INE, L-thean-INE, etc. shaping functional feelability and exploring trusted ingredients and ideal form factors.\"},{\"title\":\"Protein Efficiency\",\"subtitle\":\"Consumer Products\",\"description\":\"We're excited about protein’s evolution into an era of efficiency, offering seamless, fortified nutrition in beloved formats.\"},{\"title\":\"Fiber Comeback\",\"subtitle\":\"Consumer Products\",\"description\":\"We're excited about fiber's resurgence as a wellness hero, essential for gut health and satiety. We're exploring its rebranding and reformulation for modern convenience.\"},{\"title\":\"Fertility Reimagined\",\"subtitle\":\"Consumer Health\",\"description\":\"We're excited about redefining fertility beyond conception into a lifelong journey. Exploring how the industry expands into education, diagnostics, and affordability.\"},{\"title\":\"Beyond the Pill\",\"subtitle\":\"Consumer Health\",\"description\":\"We're excited about shifting views on hormonal birth control, as women seek alternatives to the pill. Exploring opportunities for targeted, hormone-aware treatments.\"}],\"about\":\"<strong>Listen.codes</strong> is Listen's technology vertical featuring a growing series of projects, small and large, pushing the boundaries of how we engage with technology as a firm.<br/><br/><strong>Thematics</strong> is a microsite created by Johnnie Yu, containing a collection of investment thematics that we are currently exploring, some with more conviction than others (read: closer to writing a check). Listen backs brands building at the tipping point of behavior shifts, so these thematics are closely linked to the consumer research we do.<br/><br/>---<br/><br/> <em>Attribution: The digital experience of this site is heavily inspired by designer <a href='https://read.cv/dagnng' target='_blank'>Dang Linh Nguyen</a>'s <a href='https://love-enc.glitch.me/' target='_blank'>Love Encyclopedia</a> project, which is a much more romantic project featuring quotes on love, rather than our boring collection of investment thematics.</em>\"}"));}}),
"[project]/src/data/menu.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"name\":\"About\",\"link\":\"#\",\"type\":\"modal\"},{\"name\":\"Listen.co\",\"link\":\"https://listen.co\"},{\"name\":\"Listen.codes\",\"link\":\"https://listen.codes\"}]"));}}),
"[project]/src/components/ThematicsContainer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ThematicsContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$thematics$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/thematics.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/menu.json (json)");
'use client';
;
;
;
;
function ThematicsContainer() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalContent, setModalContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load jQuery and jQuery UI dynamically
        const loadJQuery = async ()=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            } else if (window.$) {
                initializeThematics();
            }
        };
        loadJQuery();
    }, []);
    const initializeThematics = ()=>{
        if (!window.$ || !containerRef.current) return;
        const $ = window.$;
        const thematics = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$thematics$2e$json__$28$json$29$__["default"].thematics
        ].reverse();
        // Shuffle the thematics
        for(let i = thematics.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [thematics[i], thematics[j]] = [
                thematics[j],
                thematics[i]
            ];
        }
        // Setup thematics after a delay
        setTimeout(()=>{
            setupThematics(thematics);
        }, 1500);
        // Title click handler for reset
        $('#title').on('click', function() {
            $('.thematic').removeClass('activated').css({
                top: 'calc(50vh - 100px)',
                left: 'calc(50vw - 100px)'
            });
        });
        // About link click handler
        $('#about-link').on('click', function(event) {
            event.preventDefault();
            const content = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$thematics$2e$json__$28$json$29$__["default"].about;
            setModalContent(content);
            setIsModalOpen(true);
        });
        // Mouse enter handler for progressive drag activation
        $(containerRef.current).on('mouseenter', '.thematic', function(event) {
            $(this).addClass('activated');
            $(this).draggable({
                snap: true,
                containment: '#thematics-container',
                stack: '.thematic'
            });
        });
        // Click handler for text-to-speech
        $(containerRef.current).on('click', '.thematic', function(event) {
            let quote = $(this).text();
            let msg = new SpeechSynthesisUtterance(quote);
            msg.voice = getRandomVoice();
            window.speechSynthesis.speak(msg);
        });
        setIsLoaded(true);
    };
    const setupThematics = (thematics)=>{
        if (!containerRef.current) return;
        thematics.forEach((thematic, index)=>{
            const newDiv = document.createElement('div');
            newDiv.className = 'thematic';
            const title = `<strong>${thematic.title}</strong>`;
            const subtitle = thematic.subtitle ? `<span class="thematic-subtitle">${thematic.subtitle}</span>` : '';
            const description = `<p class="thematic-description">${thematic.description}</p>`;
            newDiv.innerHTML = `${title}${subtitle}${description}`;
            containerRef.current?.appendChild(newDiv);
        });
    };
    const handleMenuClick = (event, item)=>{
        if (item.type === 'modal' && item.contentKey) {
            event.preventDefault();
            const content = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$thematics$2e$json__$28$json$29$__["default"][item.contentKey];
            if (typeof content === 'string') {
                setModalContent(content);
                setIsModalOpen(true);
            }
        }
    };
    const getRandomVoice = ()=>{
        let availableVoices = window.speechSynthesis.getVoices();
        let filteredVoices = availableVoices.filter(function(voice) {
            return voice.lang.includes('en') && (voice.name.includes('Male') || voice.name.includes('Female'));
        });
        let randomIndex = Math.floor(Math.random() * filteredVoices.length);
        return filteredVoices[randomIndex];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-screen h-screen flex flex-col items-center justify-center p-6 z-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$thematics$2e$json__$28$json$29$__["default"].title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ThematicsContainer.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/ThematicsContainer.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "subtitle",
                                children: [
                                    "by ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$thematics$2e$json__$28$json$29$__["default"].author
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ThematicsContainer.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ThematicsContainer.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "menu",
                        className: "menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$json__$28$json$29$__["default"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.link,
                                        id: item.type === 'modal' ? 'about-link' : undefined,
                                        ...item.type !== 'modal' && {
                                            target: '_blank',
                                            rel: 'noopener noreferrer'
                                        },
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ThematicsContainer.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/src/components/ThematicsContainer.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ThematicsContainer.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ThematicsContainer.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ThematicsContainer.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "thematics-container",
                ref: containerRef,
                className: "relative w-full h-full flex flex-col items-center justify-center p-6 z-0"
            }, void 0, false, {
                fileName: "[project]/src/components/ThematicsContainer.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                onClick: ()=>setIsModalOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "close-button",
                            onClick: ()=>setIsModalOpen(false),
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ThematicsContainer.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            dangerouslySetInnerHTML: {
                                __html: modalContent
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ThematicsContainer.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ThematicsContainer.tsx",
                    lineNumber: 182,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ThematicsContainer.tsx",
                lineNumber: 181,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ThematicsContainer.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThematicsContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThematicsContainer.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThematicsContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__3f450d0a._.js.map