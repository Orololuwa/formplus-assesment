import { useState } from "react";

const { Dropdown } = require("components/input");

const OrderDropdown = () => {
  const options = ["default", "ascending", "descending"];

  const [value, setValue] = useState(options[0]);

  const onChangedHandler = (val) => {
    setValue(val);
  };

  return (
    <Dropdown
      placeholder="order"
      options={options}
      value={value}
      onChange={onChangedHandler}
    />
  );
};

export default OrderDropdown;
