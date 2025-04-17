import React from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemedButton() {
  const context = React.useContext(ThemeContext);
  const { theme, toggleTheme } = context;

  const buttonStyles = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#333333' : '#ffffff',
    padding: '10px 15px',
    border: `1px solid ${theme === 'light' ? '#333333' : '#ffffff'}`,
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <button onClick={toggleTheme} style={buttonStyles}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
}