import React from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemedHeader() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { theme } = context;
        const headerStyles = {
          color: theme === 'light' ? '#222222' : '#f0f0f0',
          borderBottom: `2px solid ${theme === 'light' ? '#333333' : '#ffffff'}`,
          paddingBottom: '10px'
        };
        return (
          <h1 style={headerStyles}>
            React Context Theme Example
          </h1>
        );
      }}
    </ThemeContext.Consumer>
  );
}