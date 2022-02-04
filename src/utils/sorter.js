export const sortByName = (data, sortValue) => {
  let result;
  let dataCopy = [...data]

  if (sortValue === "ascending") {
    result = dataCopy.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  } else if (sortValue === "descending") {
    result = dataCopy.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
  } else {
    result = data;
  }

  return result;
};

export const sortByDate = (data, sortValue) => {
  let result;
  let dataCopy = [...data]
  
  if (sortValue === "ascending") {
    result = dataCopy.sort((a, b) => new Date(a.created) - new Date(b.created));
  } else if (sortValue === "descending") {
    result = dataCopy.sort((a, b) => new Date(b.created) - new Date(a.created));
  } else {
    result = data;
  }
  return result;
};
