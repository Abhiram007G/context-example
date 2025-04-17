import React, { createContext, useContext, useState } from 'react';

// Create a context with a default theme value
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// Create a Provider Component
function ThemeProvider({ children }) {
  // State to hold our theme value
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Provide both the theme value and the toggle function to consumers
  const value = { theme, toggleTheme };
  console.log(children)
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Components that consume the context directly with useContext
// function ThemedButton() {
//   // Use the useContext hook directly in component
//   const context = useContext(ThemeContext);
//   const { theme, toggleTheme } = context;

//   const buttonStyles = {
//     backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
//     color: theme === 'light' ? '#333333' : '#ffffff',
//     padding: '10px 15px',
//     border: `1px solid ${theme === 'light' ? '#333333' : '#ffffff'}`,
//     borderRadius: '4px',
//     cursor: 'pointer',
//   };

//   return (
//     <button onClick={toggleTheme} style={buttonStyles}>
//       Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
//     </button>
//   );
// }

// function ThemedBox() {
//   // Use the useContext hook directly in component
//   const context = useContext(ThemeContext);
//   const { theme } = context;

//   const boxStyles = {
//     backgroundColor: theme === 'light' ? '#f0f0f0' : '#222222',
//     color: theme === 'light' ? '#333333' : '#ffffff',
//     padding: '20px',
//     margin: '20px 0',
//     borderRadius: '8px',
//     transition: 'all 0.3s ease',
//   };

//   return (
//     <div style={boxStyles}>
//       <h2>Current Theme: {theme}</h2>
//       <p>This box is styled based on the current theme from context.</p>
//     </div>
//   );
// }

// Another way to consume context using Consumer component (older approach)
// function ThemedHeader() {
//   return (
//     <ThemeContext.Consumer>
//       {(context) => {
//         const { theme } = context;
//         const headerStyles = {
//           color: theme === 'light' ? '#222222' : '#f0f0f0',
//           borderBottom: `2px solid ${theme === 'light' ? '#333333' : '#ffffff'}`,
//           paddingBottom: '10px'
//         };
//         return (
//           <h1 style={headerStyles}>
//             React Context Theme Example
//           </h1>
//         );
//       }}
//     </ThemeContext.Consumer>
//   );
// }

export { ThemeProvider, ThemeContext };