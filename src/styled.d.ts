import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      primary: string;
      secondary: string;
    };
    colors: {
      primaryDark: string;
      secondaryDark: string;
      grey: string;
      red: string;
      text: string;
    };
  }
}
