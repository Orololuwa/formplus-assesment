import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortTemplatesByDate } from "redux/templates/actionCreator";

const { Dropdown } = require("components/input");

const DateDropdown = () => {
  const dispatch = useDispatch();
  const sortActive = useSelector((state) => state.templates.dateSortActive);
  const options = ["default", "ascending", "descending"];

  const [value, setValue] = useState(options[0]);

  const onChangedHandler = (val) => {
    setValue(val);
    dispatch(sortTemplatesByDate(val))
  };

  useEffect(() => {
    if (!sortActive) setValue(options[0]);
  }, [sortActive]);

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
