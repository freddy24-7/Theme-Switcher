import React, { createContext, useContext, useState } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Create a Provider component for the theme
function ThemeProvider({ children }) {
    // State to track the current theme (dark or light)
    const [theme, setTheme] = useState('light');

    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// A custom hook to access the theme context
function useTheme() {
    return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
