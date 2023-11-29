import React from 'react';
import './App.css';
import { ThemeProvider } from './ThemeProvider';
import ThemeSwitcher from './ThemeSwitcher';

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <ThemeSwitcher />
            </div>
        </ThemeProvider>
    );
}

export default App;
