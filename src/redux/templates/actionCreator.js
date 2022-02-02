import axios from "axios";
import { templatesBegin, templatesSuccess, templatesErr } from "./actions";

const fetchTemplates = () => {
  return async (dispatch) => {
    try {
      dispatch(templatesBegin());
      const res = await axios.get("/public/task_templates");
      dispatch(templatesSuccess(res.data));
    } catch (err) {
      dispatch(templatesErr(err));
    }
  };
};

export { fetchTemplates };
