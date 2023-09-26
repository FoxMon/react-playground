import { DefaultTheme } from "styled-components";

const clientSize = {
  sm: "screen and (max-width: 640px)",
  md: "screen and (min-width: 641px) and (max-width: 1279px)",
  lg: "screen and (min-width: 1280px)",
};

/**
 * Color 구분은 100, 400 700
 *    BLACK, WHITE
 */
const colors = {
  black700: "#000000",
  white700: "#FFFFFF",
};

/**
 * Font의 Size 구분은 100 200 400 700
 */
const fontWeight = {
  fw100: "100",
  fw200: "200",
  fw400: "400",
  fw700: "700",
};

export const theme: DefaultTheme = {
  clientSize,
  colors,
  fontWeight,
};
