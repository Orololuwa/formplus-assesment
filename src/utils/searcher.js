export const searcher = (data, searchValue) => {
  return data.filter((template) => template.name.includes(searchValue));
};
