import React from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import ThemedHeader from "./ThemedHeader";
import ThemedBox from "./ThemedBox";
import ThemedButton from "./ThemedButton";
import { useContext } from "react";

function App() {
  

  return (
    <ThemeProvider>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px'}}>
        <ThemedHeader />
        <ThemedBox />
        <ThemedButton />
        <div style={{ marginTop: '20px', padding: '10px' }}>
          <h3>Nested Components</h3>
          <ThemedBox />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
