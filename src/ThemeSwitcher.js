import React from 'react';
import { useTheme } from './ThemeProvider';

function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`theme-switcher ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <p>This is an example of {theme === 'light' ? 'light' : 'dark'} mode.</p>
        </div>
    );
}

export default ThemeSwitcher;
