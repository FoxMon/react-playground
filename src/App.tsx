import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import { GlobalStyle } from "./assets/global";
import { ButtonGroups, Spinner } from "./ui";
import { useAsyncGenerator } from "./hooks/useAsyncGenerator";
import { ZustandComp } from "./components/ZustandComp";
import { ZustandCart } from "./components/ZustandCart";

function App() {
  async function* handleRequest(): any {
    const response1: any = await fetch("https://api.publicapis.org/entries");
    const data1 = await response1.json();

    yield { data1, data2: null };

    const response2: any = await fetch("https://catfact.ninja/fact");
    const data2 = await response2.json();

    return {
      data1,
      data2,
    };
  }

  const state = useAsyncGenerator<{ data1: any; data2: any }>(handleRequest);

  console.log(state);

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
        <button onClick={state.refetch}>REFETCH</button>
        <ZustandComp />
        <ZustandCart />
      </div>
    </ThemeProvider>
  );
}

export default App;
