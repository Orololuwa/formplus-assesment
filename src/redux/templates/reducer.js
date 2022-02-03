import types from "./types";

const {
  TEMPLATES_BEGIN,
  TEMPLATES_SUCCESS,
  TEMPLATES_ERR,
  TEMPLATES_INIT_FILTER,
  TEMPLATES_SEARCH_BEGIN,
  TEMPLATES_SEARCH,
  TEMPLATES_SEARCH_CLEAR,
} = types;

const initialState = {
  data: null,
  filteredData: [],
  loading: false,
  error: null,
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
        error: null,
      };
    case TEMPLATES_ERR:
      return {
        ...state,
        error: payload.err,
        loading: false,
      };
    case TEMPLATES_INIT_FILTER:
      return {
        ...state,
        filteredData: [...state.data],
      };
    case TEMPLATES_SEARCH_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case TEMPLATES_SEARCH:
      const dataCopy = [...state.filteredData];
      const filtered = dataCopy.filter((template) =>
        template.name.includes(payload.val)
      );
      return {
        ...state,
        filteredData: [...filtered],
        loading: false,
      };
    case TEMPLATES_SEARCH_CLEAR:
      return {
        ...state,
        filteredData: [...state.data],
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default templateReducer;
