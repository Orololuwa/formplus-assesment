import { sortByDate, sortByName, searcher, filterByCategory } from "utils";
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
  SORT_BY_DATE,
  SORT_BY_DATE_CLEAR,
  SORT_BY_DATE_BEGIN,
  SORT_BY_NAME,
  SORT_BY_NAME_BEGIN,
  SORT_BY_NAME_CLEAR,
} = types;

const initialState = {
  data: null,
  initialDataBeforeFilter: [],
  initialDataBeforeSearch: [],
  initialDataBeforeSort: [],
  renderedData: [],
  loading: false,
  searchValue: "",
  nameSortActive: false,
  dateSortActive: false,
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
        initialDataBeforeFilter: [...state.data], //store the templates in the initialDataBeforeFilter variable on first filter in order to be able to use it to reset filter back to "All"
      };
    case FILTER_BY_CATEGORY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FILTER_BY_CATEGORY:
      const dataCategory = [...state.renderedData];
      const filteredCategory = filterByCategory(dataCategory, payload.category); //filter category function from utils NOTE-"It's different from the filterByCategory function in Actions"
      return {
        ...state,
        renderedData: [...filteredCategory], //store templates filtered by category
        loading: false,
      };
    case FILTER_BY_CATEGORY_CLEAR:
      return {
        ...state,
        renderedData: [...state.initialDataBeforeFilter], //restore filter back to "All"
        loading: false,
      };
    case TEMPLATES_SEARCH_BEGIN:
      return {
        ...state,
        loading: true,
        initialDataBeforeSearch: state.initialDataBeforeSearch.length
          ? state.initialDataBeforeSearch
          : [...state.renderedData],
      };
    case TEMPLATES_SEARCH:
      //Searching is based on the active category
      const dataSearch = [...state.initialDataBeforeSearch];
      const filteredSearch = searcher(dataSearch, payload.val); //search function
      return {
        ...state,
        renderedData: [...filteredSearch], // store templates containing the searched name
        searchValue: payload.val, //store the searched name
        loading: false,
        error: filteredSearch.length ? null : `Opps! ${payload.val} Not Found`,
      };
    case TEMPLATES_SEARCH_CLEAR:
      return {
        ...state,
        renderedData: [...state.initialDataBeforeFilter], //set rendered templates as the initial templates of the current category
        searchValue: "",
        loading: false,
        error: null,
      };
    case SORT_BY_NAME_BEGIN:
      return {
        ...state,
        initialDataBeforeSort: state.initialDataBeforeSort.length
          ? state.initialDataBeforeSort
          : [...state.renderedData],
        loading: true,
      };
    case SORT_BY_NAME:
      //Sorting is based on the active category
      const dataSortByNameCopy = [...state.initialDataBeforeSort];
      let sortedByName = sortByName(dataSortByNameCopy, payload.value); //sort function by name
      return {
        ...state,
        renderedData: sortedByName,
        nameSortActive: true,
        loading: false,
      };
    case SORT_BY_NAME_CLEAR:
      return {
        ...state,
        renderedData: state.initialDataBeforeSort.length
          ? [...state.initialDataBeforeSort]
          : [...state.renderedData], //set the currently displayed data as the previous filtered element
        nameSortActive: false,
      };
    case SORT_BY_DATE_BEGIN:
      return {
        ...state,
        initialDataBeforeSort: state.initialDataBeforeSort.length
          ? state.initialDataBeforeSort
          : [...state.renderedData],
        loading: true,
      };
    case SORT_BY_DATE:
      //Sorting is based on the active category
      const dataSortByDateCopy = [...state.initialDataBeforeSort];
      let sortedByDate = sortByDate(dataSortByDateCopy, payload.value); //sort function by order
      return {
        ...state,
        renderedData: sortedByDate,
        dateSortActive: true,
        loading: false,
      };
    case SORT_BY_DATE_CLEAR:
      return {
        ...state,
        renderedData: state.initialDataBeforeSort.length
          ? [...state.initialDataBeforeSort]
          : [...state.renderedData], //set the currently displayed data as the previous filtered element
        dateSortActive: false,
      };
    default:
      return { ...state };
  }
};

export default templateReducer;
