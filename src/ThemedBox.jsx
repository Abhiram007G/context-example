import React , { useContext}from 'react';
import { ThemeContext } from './ThemeContext';
import { StyledBox } from './styledComponents';

export default function ThemedBox() {
  const context = useContext(ThemeContext);
  const { theme } = context;

  // const boxStyles = {
  //   backgroundColor: theme === 'light' ? '#f0f0f0' : '#222222',
  //   color: theme === 'light' ? '#333333' : '#ffffff',
  //   padding: '20px',
  //   margin: '20px 0',
  //   borderRadius: '8px',
  //   transition: 'all 0.3s ease',
  // };

  return (
    <StyledBox theme={theme}>
      <h2>Current Theme: {theme}</h2>
      <p>This box is styled based on the current theme from context.</p>
    </StyledBox>
  );
}