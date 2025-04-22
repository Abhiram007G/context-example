import React from 'react';
import { ThemeContext } from './ThemeContext';
import { StyledButton } from './styledComponents';

export default function ThemedButton() {
  const context = React.useContext(ThemeContext);
  const { theme, toggleTheme } = context;

  return (
    <StyledButton onClick={toggleTheme} theme={theme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </StyledButton>
  );
}