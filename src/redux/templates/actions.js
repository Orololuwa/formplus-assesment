import types from "./types";

const templatesBegin = () => {
  return {
    type: types.TEMPLATES_BEGIN,
  };
};

const templatesSuccess = (data) => {
  return {
    type: types.TEMPLATES_SUCCESS,
    payload: data,
  };
};

const templatesErr = (err) => {
  return {
    type: types.TEMPLATES_ERR,
    payload: {
      err,
    },
  };
};

const initialTemplatesRender = () => {
  return {
    type: types.INIT_TEMPLATES_RENDER,
  };
};

const templatesSearchBegin = () => {
  return {
    type: types.TEMPLATES_SEARCH_BEGIN,
  };
};

const templatesSearchClear = () => {
  return {
    type: types.TEMPLATES_SEARCH_CLEAR,
  };
};

const templatesSearch = (val) => {
  return {
    type: types.TEMPLATES_SEARCH,
    payload: {
      val,
    },
  };
};

const filterByCategoryBegin = () => {
  return {
    type: types.FILTER_BY_CATEGORY_BEGIN,
  };
};

const filterByCategoryClear = () => {
  return {
    type: types.FILTER_BY_CATEGORY_CLEAR,
  };
};

const filterByCategory = (category) => {
  return {
    type: types.FILTER_BY_CATEGORY,
    payload: {
      category,
    },
  };
};

export {
  templatesBegin,
  templatesSuccess,
  templatesErr,
  initialTemplatesRender,
  templatesSearchBegin,
  templatesSearch,
  templatesSearchClear,
  filterByCategoryBegin,
  filterByCategoryClear,
  filterByCategory,
};
