import axios from "axios";
import { render } from "test-utils";
import Content from ".";

// /public/task_templates
const testData = [
  {
    category: ["Health", "E-commerce", "Education"],
    created: "2022-02-05T09:56:41.981767",
    description: "amet, ullamco irure pariatur. tempor",
    link: "https://formpl.us/templates",
    name: "incididunt adipiscing Lorem",
  },
  {
    category: ["Health", "E-commerce", "Education"],
    created: "2022-02-05T09:56:41.907467",
    description: "eiusmod deserunt culpa dolor magna",
    link: "https://formpl.us/templates",
    name: "culpa cillum nulla",
  },
  {
    category: ["E-commerce", "Education"],
    created: "2022-02-05T09:56:41.460457",
    description: "magna amet, commodo proident, elit,",
    link: "https://formpl.us/templates",
    name: "culpa proident,",
  },
  {
    category: ["Health", "E-commerce", "Education"],
    created: "2022-02-05T09:56:41.952249",
    description: "magna deserunt voluptate eiusmod elit,",
    link: "https://formpl.us/templates",
    name: "consequat. incididunt Excepteur",
  },
];

jest.mock("axios");

beforeEach(() => {
  axios.get.mockImplementation((url) => {
    switch (url) {
      case "/public/task_templates":
        return Promise.resolve({ data: testData });
      default:
        return Promise.reject(new Error("not found"));
    }
  });
});

describe("Content", () => {
  test("templates are rendered on page load", async () => {
    const { findByTestId } = render(<Content />);

    const template = await findByTestId("template-card1");
    expect(template).toBeInTheDocument();
  });
});
