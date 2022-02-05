import { sortByDate, sortByName } from ".";

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

describe("Tests to confirm sort by Name functions sort appriopriately", () => {
  test("Sort by name with default value returns the array without sorting", () => {
    const expected = [
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
    const result = sortByName(data, "default");
    expect(result).toEqual(expected);
  });

  test("sort by name in ascending returns a sorted array in ascending order of name", () => {
    const expected = [
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
      {
        category: ["Health"],
        created: "2022-02-05T09:56:41.981767",
        description: "amet, ullamco irure pariatur. tempor",
        link: "https://formpl.us/templates",
        name: "incididunt adipiscing Lorem",
      },
    ];
    const result = sortByName(data, "ascending");
    expect(result).toEqual(expected);
  });

  test("sort by name in descending returns a sorted array in descending order of name", () => {
    const expected = [
      {
        category: ["Health"],
        created: "2022-02-05T09:56:41.981767",
        description: "amet, ullamco irure pariatur. tempor",
        link: "https://formpl.us/templates",
        name: "incididunt adipiscing Lorem",
      },
      {
        category: ["Education"],
        created: "2022-02-05T09:56:41.460457",
        description: "magna amet, commodo proident, elit,",
        link: "https://formpl.us/templates",
        name: "culpa proident,",
      },
      {
        category: ["E-commerce"],
        created: "2022-02-05T09:56:41.907467",
        description: "eiusmod deserunt culpa dolor magna",
        link: "https://formpl.us/templates",
        name: "culpa cillum nulla",
      },
    ];
    const result = sortByName(data, "descending");
    expect(result).toEqual(expected);
  });

  test("Sort by date with default value returns the array without sorting", () => {
    const expected = [
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
    const result = sortByDate(data, "default");
    expect(result).toEqual(expected);
  });

  test("sort by date in ascending returns a sorted array in ascending order of date", () => {
    const expected = [
      {
        category: ["Education"],
        created: "2022-02-05T09:56:41.460457",
        description: "magna amet, commodo proident, elit,",
        link: "https://formpl.us/templates",
        name: "culpa proident,",
      },
      {
        category: ["E-commerce"],
        created: "2022-02-05T09:56:41.907467",
        description: "eiusmod deserunt culpa dolor magna",
        link: "https://formpl.us/templates",
        name: "culpa cillum nulla",
      },
      {
        category: ["Health"],
        created: "2022-02-05T09:56:41.981767",
        description: "amet, ullamco irure pariatur. tempor",
        link: "https://formpl.us/templates",
        name: "incididunt adipiscing Lorem",
      },
    ];
    const result = sortByDate(data, "ascending");
    expect(result).toEqual(expected);
  });

  test("sort by date in descending returns a sorted array in descending order of date", () => {
    const expected = [
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
    const result = sortByDate(data, "descending");
    expect(result).toEqual(expected);
  });
});
