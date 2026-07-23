import { useContext } from 'react';
import { ThemeContext } from '../Context/themeContext';

/**
 * PRACTICAL EXAMPLE: How to use Theme Context in your components
 * Copy this pattern to any component where you want to use the theme
 */

export function PracticalThemeExample() {
  const { isDarkMode, theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="example-wrapper">
      {/* EXAMPLE 1: Simple text showing current theme */}
      <section className="example-section">
        <h3>Example 1: Display Current Theme</h3>
        <p>Current Mode: <strong>{isDarkMode ? 'Dark' : 'Light'}</strong></p>
      </section>

      {/* EXAMPLE 2: Conditional rendering based on theme */}
      <section className="example-section">
        <h3>Example 2: Conditional Content</h3>
        {isDarkMode ? (
          <div className="dark-specific">
            <p>🌙 Dark mode is active - showing dark-optimized content</p>
          </div>
        ) : (
          <div className="light-specific">
            <p>☀️ Light mode is active - showing light-optimized content</p>
          </div>
        )}
      </section>

      {/* EXAMPLE 3: Using CSS Variables in inline styles */}
      <section className="example-section">
        <h3>Example 3: Inline Styles with CSS Variables</h3>
        <div
          style={{
            backgroundColor: 'var(--surface-color)',
            color: 'var(--text-color)',
            padding: '15px',
            borderRadius: '4px',
            border: '1px solid var(--border-color)',
          }}
        >
          This uses CSS variables directly in inline styles!
        </div>
      </section>

      {/* EXAMPLE 4: Theme-specific images */}
      <section className="example-section">
        <h3>Example 4: Theme-Specific Images</h3>
        <img
          src={isDarkMode ? '/images/logo-dark.png' : '/images/logo-light.png'}
          alt="Logo"
          style={{ maxWidth: '200px' }}
        />
      </section>

      {/* EXAMPLE 5: Dynamic styling based on theme */}
      <section className="example-section">
        <h3>Example 5: Dynamic CSS Objects</h3>
        <Card title="Dynamic Card" isDarkMode={isDarkMode} />
      </section>

      {/* EXAMPLE 6: Theme toggle action */}
      <section className="example-section">
        <h3>Example 6: Toggle Button</h3>
        <button 
          onClick={toggleTheme}
          style={{
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Toggle Theme (Current: {theme})
        </button>
      </section>
    </div>
  );
}

/**
 * REUSABLE COMPONENT: Card component with theme support
 */
function Card({ title, isDarkMode }) {
  const cardStyle = {
    backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
    color: isDarkMode ? '#e8e8e8' : '#333333',
    padding: '20px',
    borderRadius: '8px',
    border: `1px solid ${isDarkMode ? '#404040' : '#cccccc'}`,
    boxShadow: isDarkMode 
      ? '0 2px 8px rgba(0, 0, 0, 0.3)' 
      : '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={cardStyle}>
      <h4>{title}</h4>
      <p>This card dynamically adapts to {isDarkMode ? 'dark' : 'light'} mode</p>
    </div>
  );
}

/**
 * USING THEME IN CLASS COMPONENTS (If needed)
 * 
 * import { useContext } from 'react';
 * import { ThemeContext } from './Context/themeContext';
 * 
 * // Wrap class component with hooks
 * function withTheme(Component) {
 *   return (props) => {
 *     const theme = useContext(ThemeContext);
 *     return <Component {...props} theme={theme} />;
 *   };
 * }
 * 
 * class MyClassComponent extends React.Component {
 *   render() {
 *     const { isDarkMode } = this.props.theme;
 *     return <div>Current mode: {isDarkMode ? 'Dark' : 'Light'}</div>;
 *   }
 * }
 * 
 * export default withTheme(MyClassComponent);
 */

/**
 * COMMON PATTERNS
 * 
 * Pattern 1: Using CSS Variables in className
 * ---
 * .my-class {
 *   background-color: var(--background-color);
 *   color: var(--text-color);
 * }
 * 
 * Pattern 2: Conditionally applying classes
 * ---
 * <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
 *   Content
 * </div>
 * 
 * Pattern 3: Theme-aware styling objects
 * ---
 * const styles = {
 *   container: {
 *     backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
 *     color: isDarkMode ? '#e8e8e8' : '#333333',
 *   }
 * };
 * 
 * Pattern 4: Using theme state for logic
 * ---
 * useEffect(() => {
 *   if (isDarkMode) {
 *     // Do something in dark mode
 *   } else {
 *     // Do something in light mode
 *   }
 * }, [isDarkMode]);
 */
