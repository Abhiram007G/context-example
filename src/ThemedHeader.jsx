import React from 'react';
import { ThemeContext } from './ThemeContext';
import { StyledHeader } from './styledComponents';

export default function ThemedHeader() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { theme } = context;
        
        return (
          <StyledHeader theme={theme}>React Context Theme Example</StyledHeader>
        );
      }}
    </ThemeContext.Consumer>
  );
}