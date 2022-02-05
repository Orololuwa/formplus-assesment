import axios from "axios";
import {
  templatesBegin,
  templatesSuccess,
  templatesErr,
  initialTemplatesRender,
  templatesSearchBegin,
  templatesSearch,
  templatesSearchClear,
  filterByCategory,
  filterByCategoryClear,
  filterByCategoryBegin,
  sortByDate,
  sortByDateBegin,
  sortByDateClear,
  sortByName,
  sortByNameBegin,
  sortByNameClear,
} from "./actions";

const fetchTemplates = () => {
  return async (dispatch) => {
    try {
      dispatch(templatesBegin());
      const res = await axios.get("/public/task_templates");
      dispatch(templatesSuccess(res.data));
      dispatch(initialTemplatesRender());
    } catch (err) {
      if (err.message) {
        dispatch(templatesErr(err.message));
      } else {
        dispatch(templatesErr("Oops, Something went wrong!"));
      }
    }
  };
};

const searchTemplates = (val) => {
  return (dispatch) => {
    dispatch(templatesSearchBegin());
    //delay the search for 1 second to make it seem like it coming from the backend
    setTimeout(() => {
      dispatch(templatesSearch(val));
    }, 1000);
  };
};

const filterTemplatesByCategory = (category) => {
  return (dispatch) => {
    dispatch(templatesSearchClear()); // clear the search filter
    dispatch(sortByNameClear()); // clear the 'sort by Name' filter
    dispatch(sortByDateClear()); // clear the 'sort by Date' filter
    dispatch(filterByCategoryBegin());
    //delay the filter for 1 second to make it seem like it coming from the backend
    setTimeout(() => {
      if (category === "All") {
        dispatch(filterByCategoryClear());
      } else {
        dispatch(filterByCategory(category));
      }
    }, 1000);
  };
};

const sortTemplatesByName = (value) => {
  return (dispatch) => {
    dispatch(sortByDateClear()); // clear the 'sort by Date' filter
    dispatch(sortByNameBegin());
    //delay the filter for 1 second to make it seem like it coming from the backend
    setTimeout(() => {
      dispatch(sortByName(value));
    }, 1000);
  };
};

const sortTemplatesByDate = (value) => {
  return (dispatch) => {
    dispatch(sortByNameClear()); // clear the 'sort by Name' filter
    dispatch(sortByDateBegin());
    //delay the filter for 1 second to make it seem like it coming from the backend
    setTimeout(() => {
      dispatch(sortByDate(value));
    }, 1000);
  };
};

export {
  fetchTemplates,
  searchTemplates,
  filterTemplatesByCategory,
  sortTemplatesByName,
  sortTemplatesByDate,
};
