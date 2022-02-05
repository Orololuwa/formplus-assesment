import { filterByCategory } from ".";

const data = [
  {
    category: ["Health"],
    created: "2022-02-05T09:56:41.981767",
    description: "amet, ullamco irure pariatur. tempor",
    link: "https://formpl.us/templates",
    name: "incididunt adipiscing Lorem",
  },
  {
    category: ["E-commerce"],
    created: "2022-02-05T09:56:41.907467",
    description: "eiusmod deserunt culpa dolor magna",
    link: "https://formpl.us/templates",
    name: "culpa cillum nulla",
  },
  {
    category: ["Education"],
    created: "2022-02-05T09:56:41.460457",
    description: "magna amet, commodo proident, elit,",
    link: "https://formpl.us/templates",
    name: "culpa proident,",
  },
];

describe("Tests for the filter by Category Functions", () => {
  test("filter by Education", () => {
    const expected = [
      {
        category: ["Education"],
        created: "2022-02-05T09:56:41.460457",
        description: "magna amet, commodo proident, elit,",
        link: "https://formpl.us/templates",
        name: "culpa proident,",
      },
    ];
    const result = filterByCategory(data, "Education");
    expect(result).toEqual(expected);
  });
  test("filter by E-commerce", () => {
    const expected = [
      {
        category: ["E-commerce"],
        created: "2022-02-05T09:56:41.907467",
        description: "eiusmod deserunt culpa dolor magna",
        link: "https://formpl.us/templates",
        name: "culpa cillum nulla",
      },
    ];
    const result = filterByCategory(data, "E-commerce");
    expect(result).toEqual(expected);
  });
  test("filter by Health", () => {
    const expected = [
      {
        category: ["Health"],
        created: "2022-02-05T09:56:41.981767",
        description: "amet, ullamco irure pariatur. tempor",
        link: "https://formpl.us/templates",
        name: "incididunt adipiscing Lorem",
      },
    ];
    const result = filterByCategory(data, "Health");
    expect(result).toEqual(expected);
  });
});
