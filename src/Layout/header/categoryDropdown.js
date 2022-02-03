import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTemplatesByCategory } from "redux/templates/actionCreator";

const { Dropdown } = require("components/input");

const CategoryDropdown = () => {
  const dispatch = useDispatch();
  const options = ["All", "Education", "E-commerce", "Health"];

  const [value, setValue] = useState(options[0]);

  const onChangedHandler = (val) => {
    setValue(val);
    dispatch(filterTemplatesByCategory(val));
  };

  return (
    <Dropdown
      placeholder="category"
      options={options}
      value={value}
      onChange={onChangedHandler}
    />
  );
};

export default CategoryDropdown;
