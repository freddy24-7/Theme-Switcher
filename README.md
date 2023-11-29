# React Theme Switcher

This is a simple React application that demonstrates the concept of theming by allowing users to switch between light and dark themes. The application consists of three main components: `App`, `ThemeProvider`, and `ThemeSwitcher`.

## Purpose

The purpose of this application is to showcase how to implement theming in a React application using context and state management. Users can toggle between light and dark themes, and the application's UI will dynamically update to reflect the selected theme.

## Technologies Used

- **React:** The application is built using the React JavaScript library, which provides a robust framework for building user interfaces.

- **Context API:** React's Context API is used to manage the theme state and provide it to the components that need it. This allows for a centralized way of managing and accessing the theme throughout the application.

## Components

### App

The `App` component serves as the root component of the application. It wraps the entire content in a `ThemeProvider`, which provides the theme-related context to its child components.

### ThemeProvider

The `ThemeProvider` component is responsible for managing the current theme state (light or dark) and providing it to the rest of the application. It utilizes React's `useState` hook to manage the theme state and offers a `toggleTheme` function to switch between themes. The current theme value is exposed through the context to be consumed by other components.

### ThemeSwitcher

The `ThemeSwitcher` component is a user interface element that allows users to toggle between light and dark themes. It leverages the `useTheme` custom hook to access the theme context and dynamically updates its appearance based on the selected theme. Clicking the "Toggle Theme" button changes the theme from light to dark and vice versa.

## Styling

The application provides default light and dark theme styles through CSS classes. The `light-theme` and `dark-theme` classes define the background colors and text colors for each theme. The `ThemeSwitcher` component applies these classes dynamically based on the current theme.

## How to Run

To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory using the command line.
3. Install the required dependencies by running `npm install`.
4. Start the development server with `npm start`.
5. Open your web browser and access the application at `http://localhost:3000`.

Feel free to explore the code and experiment with the theme switching functionality.

Enjoy exploring themes with React!

