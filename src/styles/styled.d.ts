import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: {
        primary: string;
        secondary: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
      details: {
        primary: string;
        secondary: string;
      };
    };
  }
}
