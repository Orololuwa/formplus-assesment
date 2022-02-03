import { useState } from "react";

const { Dropdown } = require("components/input");

const CategoryDropdown = () => {
  const options = ["all", "education", "e-commerce", "health"];

  const [value, setValue] = useState(options[0]);

  const onChangedHandler = (val) => {
    setValue(val);
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
