import styled from 'styled-components';

export const StyledHeader = styled.h1`
  color: ${(props) => (props.theme === 'light' ? '#222222' : '#f0f0f0')};
  border-bottom: 2px solid ${(props) => (props.theme === 'light' ? '#333333' : '#ffffff')};
  padding-bottom: 10px;
`

export const StyledBox = styled.div`
  background-color: ${(props) => (props.theme === 'light'? '#f0f0f0' : '#222222')};
  color: ${(props) => (props.theme === 'light'? '#222222' : '#f0f0f0')};
  padding: 20px;
  margin: 20px 0;
  border-radius: '8px';
  transition: all 0.3s ease;
`

export const StyledButton = styled.button`
    color: ${(props) => (props.theme === 'light'? '#333333' : '#ffffff')};
    background-color: ${(props) => (props.theme === 'light'? '#ffffff' : '#333333')};
    padding: 10px 15px;
    border: 1px solid ${(props) => (props.theme === 'light'? '#333333' : '#ffffff')};
    border-radius: 4px;
    cursor: pointer;
`

export const StyledContainer = styled.div`
    background-color: ${(props) => (props.theme === 'light'? '#f0f0f0' : '#222222')};
    font-family: Arial, sans-serif;
    padding: 20px;
    height: 100vh;
`