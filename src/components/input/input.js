import propTypes from "prop-types";
import cn from "classnames";
import { IoSearchOutline } from "react-icons/io5";

const Input = (props) => {
  return (
    <div
      className={cn({
        "relative w-full sm:w-max": true,
        [props.className]: props.className,
      })}
    >
      <input
        {...props}
        className="border-2 px-4 py-1 w-full sm:w-56 md:w-72 focus:outline-none text-gray-400"
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      />
      {props.type === "search" && (
        <IoSearchOutline
          onClick={props.onSubmit}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 bg-white cursor-pointer"
          size={20}
        />
      )}
    </div>
  );
};

Input.propTypes = {
  type: propTypes.string.isRequired,
  className: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.any,
  onChange: propTypes.func,
  onSubmit: propTypes.func,
};

export default Input;
