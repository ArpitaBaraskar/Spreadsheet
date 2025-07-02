# Spreadsheet Prototype

A pixel-perfect, interactive spreadsheet-like React app inspired by Google Sheets and Figma design.

## Features
- Spreadsheet grid with editable cells and keyboard navigation
- Toolbar with Hide Fields, Sort, Filter, Cell View, Import, Export, Share
- Status and Priority badges
- Bottom tab navigation (All Orders, Pending, Reviewed, Arrived, +)
- Column hiding, sorting, and tab-based filtering
- Fully responsive and styled with Tailwind CSS
- TypeScript strict mode

## Tech Stack
- React 18 (Vite or CRA)
- TypeScript
- Tailwind CSS
- ESLint + Prettier

## Setup & Run

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   # or for Create React App:
   npm start
   ```
3. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal).

## Linting & Type Checking
- Run ESLint:
  ```sh
  npm run lint
  ```
- Run TypeScript type check:
  ```sh
  npm run type-check
  ```

## Folder Structure
```
spreadsheet-app/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── types/
│   ├── utils/
│   ├── styles/
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Design
- UI matches the provided Figma: [Figma Link](https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535)
- No emojis, all icons are custom SVGs

## Notes & Trade-offs
- No backend: all data is local and resets on refresh
- Minimal custom table for spreadsheet experience
- Stretch goals (column resize, advanced filters, etc.) can be added as needed

---

**Good luck and have fun!**
