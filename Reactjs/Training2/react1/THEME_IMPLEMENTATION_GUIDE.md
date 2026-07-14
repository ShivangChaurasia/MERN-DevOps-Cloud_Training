# Light/Dark Mode Theme System - Implementation Guide

## 🎨 Overview
Your React application now has a complete light/dark mode system built with `useContext`. The theme preference is saved to localStorage and respects system preferences.

---

## 📁 Files Created/Modified

### New Files:
1. **`src/Context/themeContext.jsx`** - Theme context with provider and custom hook
2. **`src/Components/ThemeToggle.jsx`** - Theme toggle button component
3. **`src/css/ThemeToggle.css`** - Styles for theme toggle button
4. **`src/Components/ExampleThemeUsage.jsx`** - Example of using theme in components

### Modified Files:
1. **`src/App.jsx`** - Wrapped with ThemeProvider
2. **`src/Navigation.jsx`** - Added ThemeToggle button
3. **`src/css/global.css`** - Added CSS variables for light/dark themes
4. **`src/css/navigation.css`** - Updated to use CSS variables

---

## 🔄 How It Works

### ThemeContext Structure:
```javascript
{
  isDarkMode: boolean,        // Current theme state
  theme: 'light' | 'dark',    // String representation
  toggleTheme: function,      // Function to toggle theme
}
```

### Theme Persistence:
- Saves theme preference to `localStorage` as `theme`
- On app load, checks saved preference
- Falls back to system preference if nothing saved
- Updates `data-theme` attribute on `<html>` element

### CSS Variables:
The following CSS variables are available in both light and dark modes:

**Light Mode (Default):**
- `--primary-color: #0066cc`
- `--primary-dark: #0052a3`
- `--background-color: #f4f6f8`
- `--surface-color: #ffffff`
- `--text-color: #333333`
- `--text-light: #666666`
- `--border-color: #cccccc`
- `--shadow-color: rgba(0, 0, 0, 0.1)`

**Dark Mode:**
- `--primary-color: #4a9eff`
- `--primary-dark: #357abd`
- `--background-color: #1a1a1a`
- `--surface-color: #2d2d2d`
- `--text-color: #e8e8e8`
- `--text-light: #b0b0b0`
- `--border-color: #404040`
- `--shadow-color: rgba(0, 0, 0, 0.3)`

---

## 📋 How to Use in Your Components

### Method 1: Using useContext (Direct)
```javascript
import { useContext } from 'react';
import { ThemeContext } from './Context/themeContext';

function MyComponent() {
  const { isDarkMode, theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      {isDarkMode && <p>Dark mode enabled!</p>}
    </div>
  );
}
```

### Method 2: Using Custom Hook (Recommended)
```javascript
import { useTheme } from './Context/themeContext';

function MyComponent() {
  const { isDarkMode, theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  );
}
```

---

## 🎯 Updating Your CSS Files

### Current CSS (Old):
```css
body {
  background-color: #f4f6f8;
  color: #333;
}

.button {
  background-color: #0066cc;
  color: white;
}

.card {
  background-color: #ffffff;
  border: 1px solid #ccc;
}
```

### Updated CSS (New - Supports Themes):
```css
body {
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.button {
  background-color: var(--primary-color);
  color: white;
}

.card {
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
}
```

### CSS Files to Update:
1. **`src/css/dashboard.css`** - Update all color values
2. **`src/css/form.css`** - Update all color values
3. **`src/css/home.css`** - Update all color values
4. **`src/css/login.css`** - Update all color values
5. **`src/css/signup.css`** - Update all color values
6. **`src/css/hooks.css`** - Update all color values

---

## 🚀 Quick Start Examples

### Example 1: Theme Toggle in Header
```javascript
import { ThemeToggle } from './Components/ThemeToggle';

export function Header() {
  return (
    <header>
      <h1>My App</h1>
      <ThemeToggle /> {/* Renders theme toggle button */}
    </header>
  );
}
```

### Example 2: Conditional Rendering Based on Theme
```javascript
import { useContext } from 'react';
import { ThemeContext } from './Context/themeContext';

function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="dashboard">
      {isDarkMode ? (
        <img src="/dark-logo.png" alt="Logo" />
      ) : (
        <img src="/light-logo.png" alt="Logo" />
      )}
    </div>
  );
}
```

### Example 3: Custom Styling Based on Theme
```javascript
import { useContext } from 'react';
import { ThemeContext } from './Context/themeContext';

function Card() {
  const { theme } = useContext(ThemeContext);
  
  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#2d2d2d' : '#ffffff',
    color: theme === 'dark' ? '#e8e8e8' : '#333333',
  };

  return <div style={cardStyle}>My Card</div>;
}
```

---

## ✅ Testing Your Theme

1. **Click the theme toggle button** in the navigation bar
2. **Refresh the page** - your theme preference should persist
3. **Open browser DevTools** and check:
   - localStorage for `theme` key
   - `<html>` element has `data-theme="light"` or `data-theme="dark"`
   - CSS variables are applied correctly

---

## 🎨 Customizing Colors

To customize the theme colors, edit `src/css/global.css`:

```css
/* Light Theme */
[data-theme='light'] {
  --primary-color: #0066cc;  /* Change this */
  --background-color: #f4f6f8;  /* Change this */
  /* ... other colors ... */
}

/* Dark Theme */
[data-theme='dark'] {
  --primary-color: #4a9eff;  /* Change this */
  --background-color: #1a1a1a;  /* Change this */
  /* ... other colors ... */
}
```

---

## 🔧 Advanced Usage

### Listening to Theme Changes
```javascript
import { useContext, useEffect } from 'react';
import { ThemeContext } from './Context/themeContext';

function Analytics() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(`User switched to ${theme} mode`);
    // Track analytics, update external APIs, etc.
  }, [theme]);

  return <div>Theme: {theme}</div>;
}
```

### System Preference Sync
The theme system automatically respects system color scheme preferences:
```javascript
// Windows: Settings > Personalization > Colors > Choose your mode
// Mac: System Preferences > General > Appearance
// Linux: Desktop Environment settings
```

---

## 🐛 Troubleshooting

### Theme not changing?
1. Check if `ThemeProvider` wraps your entire app in `App.jsx`
2. Verify `data-theme` attribute changes in DevTools
3. Clear browser cache and localStorage

### Styles not updating?
1. Make sure you're using `var(--variable-name)` syntax
2. Check CSS variables are defined in `global.css`
3. Verify no hardcoded colors override the variables

### Theme not persisting?
1. Check if localStorage is enabled
2. Open DevTools > Application > Local Storage
3. Look for `theme` key with value `"light"` or `"dark"`

---

## 📚 Files Summary

```
src/
├── Context/
│   └── themeContext.jsx          ✨ Theme context & provider
├── Components/
│   ├── ThemeToggle.jsx            ✨ Toggle button
│   └── ExampleThemeUsage.jsx       ✨ Usage examples
├── css/
│   ├── global.css                 ✏️ CSS variables (updated)
│   ├── navigation.css             ✏️ Nav styles (updated)
│   ├── ThemeToggle.css            ✨ Toggle button styles
│   ├── dashboard.css              (needs updating)
│   ├── form.css                   (needs updating)
│   ├── home.css                   (needs updating)
│   ├── login.css                  (needs updating)
│   ├── signup.css                 (needs updating)
│   └── hooks.css                  (needs updating)
├── App.jsx                        ✏️ Wrapped with provider
├── Navigation.jsx                 ✏️ Added toggle button
└── ...other components
```

---

## ✨ Features

✅ Light and Dark mode  
✅ Theme persistence (localStorage)  
✅ System preference detection  
✅ CSS variables for easy customization  
✅ Smooth transitions between themes  
✅ Custom React hook for easy access  
✅ Emoji-based toggle button  
✅ Accessible (aria-labels)  

---

**Happy theming! 🌙☀️**
