
import React , { useContext}from 'react';
import { ThemeContext } from './ThemeContext';
import { StyledContainer } from './styledComponents';

export default function ThemedContainer({children}) {
  const context = useContext(ThemeContext);
  const { theme } = context;    
  
  return (
    <StyledContainer theme={theme}>
        {children}
    </StyledContainer>
  )
}