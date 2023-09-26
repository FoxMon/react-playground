import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    clientSize: {
      sm: string;
      md: string;
      lg: string;
    };

    colors: {
      black700: string;
      white700: string;
      gray400: string;
      spinner: string;
    };
  }
}
