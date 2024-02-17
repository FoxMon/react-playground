import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import { GlobalStyle } from "./assets/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div></div>
    </ThemeProvider>
  );
}

export default App;
