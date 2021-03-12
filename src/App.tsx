//Routes
import Routes from "./routes";

//Styles
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme } from "./styles/theme/light";

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>
);
export default App;
