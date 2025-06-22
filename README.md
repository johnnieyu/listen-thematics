# Investment Thematics

An interactive web application that presents investment thematics through drag-and-drop cards, inspired by the Love Encyclopedia concept but repurposed for investment insights.

## Features

- **Interactive Cards**: Drag and drop investment thematics around the screen
- **Progressive Enhancement**: Cards become draggable only when hovered over
- **Text-to-Speech**: Click any card to hear the thematic read aloud
- **Reset Functionality**: Click the title to reset all cards to center
- **Mobile Support**: Touch-friendly with jQuery UI Touch Punch
- **Neumorphic Design**: Modern soft UI with subtle shadows and depth

## Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **jQuery UI** - Drag and drop functionality
- **Web Speech API** - Text-to-speech capabilities

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## How It Works

### Card Interaction
- Cards start centered on the screen
- Hover over a card to activate it (adds shadow and makes it draggable)
- Drag cards around the screen to create your own arrangement
- Click any card to hear the investment thematic read aloud
- Click the title to reset all cards to center

### Data Structure
The thematics are stored in `src/data/thematics.json`:
```json
{
  "title": "Investment Thematics",
  "author": "Strategic Insights",
  "thematics": [
    "Artificial Intelligence and Machine Learning are reshaping every industry...",
    "The energy transition is creating unprecedented opportunities...",
    // ... more thematics
  ]
}
```

### Styling
- Uses Inter font for a modern, professional look
- Neumorphic design with soft shadows
- Responsive design that works on desktop and mobile
- Smooth transitions and animations

## Customization

### Adding New Thematics
Edit `src/data/thematics.json` to add, remove, or modify investment thematics.

### Styling Changes
- Main styles are in `src/app/globals.css`
- Card-specific styles use the `.thematic` class
- Activated state uses `.activated` class

### Font Changes
Update the font import in `src/app/globals.css` and the font configuration in `src/app/layout.tsx`.

## Browser Support

- Modern browsers with ES6+ support
- Mobile browsers with touch support
- Requires Web Speech API for text-to-speech functionality

## Development

### Project Structure
```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page component
├── components/
│   └── ThematicsContainer.tsx  # Main interactive component
├── data/
│   └── thematics.json   # Investment thematics data
└── types/
    └── thematics.d.ts   # TypeScript declarations
```

### Key Components

**ThematicsContainer**: Main component that handles:
- Dynamic loading of jQuery and jQuery UI
- Card creation and positioning
- Drag and drop initialization
- Text-to-speech functionality
- Reset functionality

## Deployment

The project can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## License

This project is open source and available under the MIT License.
