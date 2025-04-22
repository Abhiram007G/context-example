import React from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import ThemedHeader from "./ThemedHeader";
import ThemedBox from "./ThemedBox";
import ThemedButton from "./ThemedButton";
import { useContext } from "react";
import ThemedContainer from "./ThemedContainer";

function App() {
  

  return (
    <ThemeProvider>
      <ThemedContainer>
        <ThemedHeader />
        <ThemedBox />
        <ThemedButton />
        <div style={{ marginTop: '20px', padding: '10px' }}>
          <h3>Nested Components</h3>
          <ThemedBox />
        </div>
      </ThemedContainer>
    </ThemeProvider>
  );
}

export default App;
