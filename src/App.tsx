import { Suspense } from "react";
import {
  QueryClientProvider,
  QueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import { GlobalStyle } from "./assets/global";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div></div>
        <Suspense fallback={<div>Loading...</div>}>
          <QueryExample />
        </Suspense>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

function QueryExample() {
  const { error, data } = useSuspenseQuery({
    queryKey: ["fakestoreapi/products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  console.log(error);
  console.log(data);

  return <div>Query</div>;
}

export default App;
