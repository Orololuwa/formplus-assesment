import axios from "axios";
import { templatesBegin, templatesSuccess, templatesErr } from "./actions";

const fetchTemplates = () => {
  return async (dispatch) => {
    try {
      dispatch(templatesBegin());
      const res = await axios.get("/public/task_templates");
      dispatch(templatesSuccess(res.data));
    } catch (err) {
      if (err.message) {
        dispatch(templatesErr(err.message));
      } else {
        dispatch(templatesErr("Oops, Something went wrong!"));
      }
    }
  };
};

export { fetchTemplates };
