import Header from "Layout/header";
import Content from "Layout/content";
import { ThemeProvider } from "styled-components";
import theme from "theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content />
    </ThemeProvider>
  );
};

export default App;
