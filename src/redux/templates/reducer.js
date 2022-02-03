import types from "./types";

const {
  TEMPLATES_BEGIN,
  TEMPLATES_SUCCESS,
  TEMPLATES_ERR,
  TEMPLATES_INIT_FILTER,
  TEMPLATES_SEARCH_BEGIN,
  TEMPLATES_SEARCH,
  TEMPLATES_SEARCH_CLEAR,
  FILTER_BY_CATEGORY_BEGIN,
  FILTER_BY_CATEGORY,
  FILTER_BY_CATEGORY_CLEAR,
} = types;

const initialState = {
  data: null,
  filteredData: [],
  renderedData: [],
  loading: false,
  searchValue: "",
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
        renderedData: [...state.data],
      };
    case FILTER_BY_CATEGORY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FILTER_BY_CATEGORY:
      const dataCategory = [...state.data];
      const filteredCategory = dataCategory.filter((template) =>
        template.category.includes(payload.category)
      );
      return {
        ...state,
        filteredData: [...filteredCategory],
        renderedData: [...filteredCategory],
        loading: false,
      };
    case FILTER_BY_CATEGORY_CLEAR:
      return {
        ...state,
        filteredData: [...state.data],
        renderedData: [...state.data],
        loading: false,
      };
    case TEMPLATES_SEARCH_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case TEMPLATES_SEARCH:
      //Searching is based on the active category
      const dataSearch = [...state.filteredData];
      const filteredSearch = dataSearch.filter((template) =>
        template.name.includes(payload.val)
      );
      return {
        ...state,
        renderedData: [...filteredSearch],
        searchValue: payload.val,
        loading: false,
      };
    case TEMPLATES_SEARCH_CLEAR:
      return {
        ...state,
        renderedData: [...state.filteredData],
        searchValue: "",
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default templateReducer;
