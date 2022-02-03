import { useState } from "react";

const { Dropdown } = require("components/input");

const DateDropdown = () => {
  const options = ["default", "ascending", "descending"];

  const [value, setValue] = useState(options[0]);

  const onChangedHandler = (val) => {
    setValue(val);
  };

  return (
    <Dropdown
      placeholder="date"
      options={options}
      value={value}
      onChange={onChangedHandler}
    />
  );
};

export default DateDropdown;
