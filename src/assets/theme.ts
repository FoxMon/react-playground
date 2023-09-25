import { DefaultTheme } from "styled-components";

const clientSize = {
  sm: "screen and (max-width: 640px)",
  md: "screen and (min-width: 641px) and (max-width: 1279px)",
  lg: "screen and (min-width: 1280px)",
};

export const theme: DefaultTheme = {
  clientSize,
};
