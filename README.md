# Todo React App

A modern, feature-rich todo application built with React, Vite, and Tailwind CSS. Manage your tasks efficiently with local storage persistence and an intuitive user interface.

## Screenshots

![Home Page](src/assets/home.png)

![Todos Page](src/assets/todos.png)

## Features

- ✅ **Add, Edit, and Delete Todos** - Full CRUD functionality for managing tasks
- 💾 **Local Storage Persistence** - Your todos are automatically saved and restored
- 🎨 **Modern UI** - Built with Tailwind CSS for a clean, responsive design
- ⚡ **Fast Development** - Powered by Vite for instant HMR (Hot Module Replacement)
- 🎭 **3D Components** - 3D background using Three.js and React Three Fiber
- ✨ **Smooth Animations** - Enhanced UX with GSAP animations
- 🔍 **Code Quality** - ESLint configured for consistent code standards

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 5.x
- **Styling**: Tailwind CSS 4.1
- **3D Graphics**: Three.js & React Three Fiber
- **Animations**: GSAP 3.14
- **Utilities**: UUID for unique IDs
- **Linting**: ESLint 9.39

## Project Structure

```
src/
├── App.jsx              # Main application component
├── App.css              # Application styles
├── main.jsx             # React entry point
├── index.css            # Global styles
├── assets/              # Images and static assets
└── components/
    ├── Navbar.jsx       # Navigation component
    ├── Footer.jsx       # Footer component
    └── Silk.jsx         # 3D silk animation component
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build

Create an optimized production build:

```bash
npm run build
```

## Usage

1. **Add a Todo**: Type your task in the input field and click the add button or press Enter
2. **Edit a Todo**: Click the edit button on a task to modify it
3. **Complete a Todo**: Mark tasks as completed with the checkbox
4. **Delete a Todo**: Remove tasks you no longer need
5. **Persistence**: All changes are automatically saved to browser's local storage

## Components

### App.jsx

The main component handling todo state management, local storage sync, and core functionality.

### Navbar.jsx

Navigation component displayed at the top of the application.

### Footer.jsx

Footer component with additional information and links.

### Silk.jsx

3D silk animation component using Three.js for visual enhancement.

## Local Storage

The app uses browser's `localStorage` to persist todos. The data is stored under the key `todos` as a JSON array. This ensures your todos are available even after closing the browser.

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Vite** provides instant server start and lightning-fast HMR
- **Tailwind CSS** ensures optimized, minimal CSS bundles
- **React 19** with latest optimizations for smooth performance

## Future Enhancements

- Todo categories and tags
- Due dates and reminders
- Search and filter functionality
- Dark mode toggle
- Export/Import todos
- Cloud synchronization

**Made with ❤️ by Aryan**
