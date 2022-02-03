import axios from "axios";
import {
  templatesBegin,
  templatesSuccess,
  templatesErr,
  initialTemplateFilter,
  templatesSearchBegin,
  templatesSearch,
  templatesSearchClear,
} from "./actions";

const fetchTemplates = () => {
  return async (dispatch) => {
    try {
      dispatch(templatesBegin());
      const res = await axios.get("/public/task_templates");
      dispatch(templatesSuccess(res.data));
      dispatch(initialTemplateFilter());
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
    //delay the search for 2 seconds to make it seem like it coming from the backend
    setTimeout(() => {
      dispatch(templatesSearch(val));
    }, 2000);
  };
};

export { fetchTemplates, searchTemplates };
