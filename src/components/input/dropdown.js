import { useState } from "react";
import propTypes from "prop-types";
import cn from "classnames";
import { IoCaretDownOutline } from "react-icons/io5";

import DropdownOption from "./dropdownOption";

const Dropdown = ({ options, placeholder, className }) => {
  const [optionShow, setOptionShow] = useState(false);

  const optionShowHandler = () => {
    setOptionShow((prevState) => !prevState);
  };

  const [value, setValue] = useState(options[0]);

  const setValueHandler = (val) => {
    setValue(val);
    setOptionShow(false);
  };

  return (
    <div className="relative w-max">
      <div
        onClick={optionShowHandler}
        className={cn({
          "border-2 px-4 py-1 w-24 sm:w-24 lg:44 focus:outline-none text-gray-700 cursor-pointer capitalize": true,
          [className]: className,
        })}
      >
        <span className="py-1 text-xs">{value}</span>
      </div>
      {placeholder && (
        <span className="absolute -top-2 left-6 px-2 bg-white text-xs text-gray-400 capitalize">
          {placeholder}
        </span>
      )}
      <IoCaretDownOutline
        className={cn({
          "absolute top-1/2 right-2 md:right-4 -translate-y-1/2 text-gray-400 text-lg bg-white cursor-pointer leading-none  transition-transform": true,
          "rotate-180": optionShow,
        })}
        size={15}
      />
      {optionShow && (
        <div className="absolute top-full left-0 w-full pt-2">
          {options.map((dropdown, idx) => (
            <DropdownOption key={idx} onClick={() => setValueHandler(dropdown)}>
              {dropdown}
            </DropdownOption>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  options: propTypes.arrayOf(propTypes.string),
  className: propTypes.string,
  placeholder: propTypes.string,
};
