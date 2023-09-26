import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import { GlobalStyle } from "./assets/global";
import { ButtonGroups, Spinner } from "./ui";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <ButtonGroups.Button
          fontWeight="fw700"
          outlined="outlined"
          label="Button"
        />
        <ButtonGroups.Button
          fontWeight="fw700"
          outlined="outlined"
          label="Button"
        />
        <Spinner />
      </div>
    </ThemeProvider>
  );
}

export default App;
