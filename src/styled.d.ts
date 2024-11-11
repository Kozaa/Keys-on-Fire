import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      primary: string;
      secondary: string;
    };
    colors: {
      background: string;
      primary: string;
      secondary: string;
      grey: string;
      red: string;
      text: string;
    };
  }
}
