import { render as rtlRender, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "redux/store";
import Content from ".";
import theme from "theme";
import { ThemeProvider } from "styled-components";

const render = (Component) =>
  rtlRender(
    <Provider store={store}>
      <ThemeProvider theme={theme}>{Component}</ThemeProvider>
    </Provider>
  );

describe("Content Tes", () => {
  test("App renders", async () => {
    render(<Content />);
    screen.debug();
    const templates = await screen.findByTestId("template-card1");
    expect(templates).toBeInTheDocument();
  });
});
