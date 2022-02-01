import propTypes from "prop-types";

const DropdownOption = ({ children, onClick }) => (
  <div
    className="bg-gray-400 text-white mb-1 text-xs px-4 py-1 cursor-pointer capitalize z-50 whitespace-nowrap text-ellipsis overflow-hidden"
    onClick={onClick}
  >
    {children}
  </div>
);

DropdownOption.propTypes = {
  children: propTypes.any,
  onClick: propTypes.func,
};

export default DropdownOption;
