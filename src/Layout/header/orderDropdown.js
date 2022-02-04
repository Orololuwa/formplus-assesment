import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortTemplatesByName } from "redux/templates/actionCreator";

const { Dropdown } = require("components/input");

const OrderDropdown = () => {
  const dispatch = useDispatch();
  const sortActive = useSelector((state) => state.templates.nameSortActive);
  const options = ["default", "ascending", "descending"];

  const [value, setValue] = useState(options[0]);

  const onChangedHandler = (val) => {
    setValue(val);
    dispatch(sortTemplatesByName(val));
  };

  useEffect(() => {
    if (!sortActive) setValue(options[0]);
  }, [sortActive]);

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
