import { render as rtlRender, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "redux/store";
import Content from ".";

const render = (Component) =>
  rtlRender(<Provider store={store}>{Component}</Provider>);

describe("Content Tes", () => {
  test("App renders", async () => {
    render(<Content />);
    screen.debug();
    const templates = await screen.queryByTestId("template-card1");
    expect(templates).toBeInTheDocument();
  });
});
