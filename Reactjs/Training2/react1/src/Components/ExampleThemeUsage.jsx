import { useContext } from 'react';
import { ThemeContext } from './Context/themeContext';

/**
 * Example component showing how to use the theme context in your components
 * 
 * You can use the useContext hook directly or use the pattern shown below
 */

export function ExampleThemeUsage() {
  // Method 1: Using useContext directly
  const { isDarkMode, theme, toggleTheme } = useContext(ThemeContext);

  // Method 2: If you export a useTheme custom hook from themeContext.jsx
  // const { isDarkMode, theme, toggleTheme } = useTheme();

  return (
    <div className="example-container">
      <h2>Theme Example Component</h2>
      <p>Current Theme: <strong>{theme.toUpperCase()}</strong></p>
      <p>Dark Mode: {isDarkMode ? 'Yes ✓' : 'No'}</p>
      
      {/* You can conditionally render content based on theme */}
      {isDarkMode && <p>Dark mode is active - you can render dark-specific content</p>}
      {!isDarkMode && <p>Light mode is active - you can render light-specific content</p>}

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

/**
 * INTEGRATION GUIDE for your other components:
 * 
 * 1. HOME.JSX, LOGIN.JSX, DASHBOARD.JSX, etc.:
 *    - Import ThemeContext
 *    - Use useContext(ThemeContext) to access { isDarkMode, theme, toggleTheme }
 *    - Update your CSS files to use CSS variables instead of hardcoded colors
 * 
 * 2. CSS VARIABLE USAGE:
 *    Instead of:
 *      color: #333;
 *      background-color: #f4f6f8;
 *      border: 1px solid #ccc;
 *    
 *    Use:
 *      color: var(--text-color);
 *      background-color: var(--background-color);
 *      border: 1px solid var(--border-color);
 * 
 * 3. AVAILABLE CSS VARIABLES:
 *    --primary-color (button, links)
 *    --primary-dark (hover state)
 *    --background-color (page background)
 *    --surface-color (cards, navbar)
 *    --text-color (main text)
 *    --text-light (secondary text)
 *    --border-color (borders)
 *    --shadow-color (shadows)
 */
