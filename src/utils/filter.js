export const filterByCategory = (data, value) => {
  return data.filter((template) => template.category.includes(value));
};
