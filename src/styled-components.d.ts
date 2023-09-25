import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    clientSize: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
