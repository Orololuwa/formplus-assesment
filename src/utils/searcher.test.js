import { searcher } from ".";

const data = [
  {
    category: ["Health"],
    created: "2022-02-05T09:56:41.981767",
    description: "amet, ullamco irure pariatur. tempor",
    link: "https://formpl.us/templates",
    name: "incididunt adipiscing Lorem searchValue",
  },
  {
    category: ["E-commerce"],
    created: "2022-02-05T09:56:41.907467",
    description: "eiusmod deserunt culpa dolor magna",
    link: "https://formpl.us/templates",
    name: "culpa cillum nulla searchValue",
  },
  {
    category: ["Education"],
    created: "2022-02-05T09:56:41.460457",
    description: "magna amet, commodo proident, elit,",
    link: "https://formpl.us/templates",
    name: "culpa proident,",
  },
];

describe("Tests for Search Functions", () => {
  test("Search a template returns templates with serached Value", () => {
    const expected = [
      {
        category: ["Health"],
        created: "2022-02-05T09:56:41.981767",
        description: "amet, ullamco irure pariatur. tempor",
        link: "https://formpl.us/templates",
        name: "incididunt adipiscing Lorem searchValue",
      },
      {
        category: ["E-commerce"],
        created: "2022-02-05T09:56:41.907467",
        description: "eiusmod deserunt culpa dolor magna",
        link: "https://formpl.us/templates",
        name: "culpa cillum nulla searchValue",
      },
    ];

    const result = searcher(data, "searchValue");

    expect(result).toEqual(expected);
  });
});
