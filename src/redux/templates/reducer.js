import types from "./types";

const {
  TEMPLATES_BEGIN,
  TEMPLATES_SUCCESS,
  TEMPLATES_ERR,
  INIT_TEMPLATES_RENDER,
  TEMPLATES_SEARCH_BEGIN,
  TEMPLATES_SEARCH,
  TEMPLATES_SEARCH_CLEAR,
  FILTER_BY_CATEGORY_BEGIN,
  FILTER_BY_CATEGORY,
  FILTER_BY_CATEGORY_CLEAR,
} = types;

const initialState = {
  data: null,
  initialFilteredData: [],
  initialSearchedData: [],
  initialSortedData: [],
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
    case INIT_TEMPLATES_RENDER:
      return {
        ...state,
        renderedData: [...state.data],
        initialFilteredData: [...state.data], //store the templates in the initialFilteredData variable on first filter in order to be able to use it to reset filter back to "All"
      };
    case FILTER_BY_CATEGORY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FILTER_BY_CATEGORY:
      const dataCategory = [...state.renderedData];
      const filteredCategory = dataCategory.filter((template) =>
        template.category.includes(payload.category)
      );
      return {
        ...state,
        renderedData: [...filteredCategory], //store templates filtered by category
        loading: false,
      };
    case FILTER_BY_CATEGORY_CLEAR:
      return {
        ...state,
        renderedData: [...state.initialFilteredData], //restore filter back to "All"
        loading: false,
      };
    case TEMPLATES_SEARCH_BEGIN:
      return {
        ...state,
        loading: true,
        initialSearchedData: state.initialSearchedData.length
          ? state.initialSearchedData
          : [...state.renderedData],
      };
    case TEMPLATES_SEARCH:
      //Searching is based on the active category
      const dataSearch = [...state.initialSearchedData];
      const filteredSearch = dataSearch.filter((template) =>
        template.name.includes(payload.val)
      );
      return {
        ...state,
        renderedData: [...filteredSearch], // store templates containing the searched name
        searchValue: payload.val, //store the searched name
        loading: false,
      };
    case TEMPLATES_SEARCH_CLEAR:
      return {
        ...state,
        renderedData: [...state.initialFilteredData], //set rendered templates as the initial templates of the current category
        searchValue: "",
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default templateReducer;
