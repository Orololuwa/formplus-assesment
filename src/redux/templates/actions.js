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

const templatesErr = () => {
  return {
    type: types.TEMPLATES_ERR,
  };
};

export { templatesBegin, templatesSuccess, templatesErr };
