import types from "./types";

const { TEMPLATES_BEGIN, TEMPLATES_SUCCESS, TEMPLATES_ERR } = types;

const initialState = {
  data: null,
  loading: false,
  error: false,
};

const templateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TEMPLATES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case TEMPLATES_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case TEMPLATES_ERR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default templateReducer;
