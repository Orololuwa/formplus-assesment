import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TemplatesContainer from ".";
import data from "./testData.json";

describe("Templates Container", () => {
  test("Templates are rendered when page is loaded", () => {
    render(<TemplatesContainer data={data} />);
    const templates = screen.getByTestId("template-card1");
    expect(templates).toBeInTheDocument();
  });

  test("Templates rendered are not more than the paginated page size (12)", () => {
    render(<TemplatesContainer data={data} />);
    const templates = screen.getAllByTestId(/template-card/i);
    expect(templates.length <= 12).toBeTruthy();
  });

  test("Prev pagination button is disabled on page load (first page is been rendered)", () => {
    render(<TemplatesContainer data={data} />);
    const prev = screen.getByTestId("btnPrev");
    expect(prev.hasAttribute("disabled")).toBeTruthy();
  });

  test("Next pagination button is disabled when user is on the last page", () => {
    render(<TemplatesContainer data={data} />);
    const next = screen.getByTestId("btnNext");
    userEvent.click(next); //Click happens once since there can only be two pages rendered from the dummy data
    expect(next.hasAttribute("disabled")).toBeTruthy();
  });
});
