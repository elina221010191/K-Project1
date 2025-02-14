import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context to manage the theme
const ThemeContext = createContext();

// Theme provider component
export function ThemeProvider({ children }) {
  // Check if user previously set a preference in localStorage
  const storedTheme = localStorage.getItem('theme');
  const [darkMode, setDarkMode] = useState(storedTheme === 'dark');

  // Update the theme in localStorage and apply it to the document
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Toggle function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Provide the state and toggle function to children
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme
export function useTheme() {
  return useContext(ThemeContext);
}

// ThemeToggle component
export function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}

// App component
function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <header>
          {/* <h1>Dark Mode Demo</h1> */}
          <ThemeToggle />
        </header>
        <main>
          {/* <p>This is a simple dark mode implementation in React.</p> */}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;