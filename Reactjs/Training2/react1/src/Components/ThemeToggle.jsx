import { useContext } from 'react';
import { ThemeContext } from '../Context/themeContext';
import '../css/ThemeToggle.css';

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      className="theme-toggle-btn" 
      onClick={toggleTheme}
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label="Toggle theme"
    >
      {isDarkMode ? 'Light' : 'Dark'}
    </button>
  );
}
