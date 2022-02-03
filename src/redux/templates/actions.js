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

const initialTemplateFilter = () => {
  return {
    type: types.TEMPLATES_INIT_FILTER,
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

export {
  templatesBegin,
  templatesSuccess,
  templatesErr,
  initialTemplateFilter,
  templatesSearchBegin,
  templatesSearch,
  templatesSearchClear
};
