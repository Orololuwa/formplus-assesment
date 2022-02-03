import { Input } from "components/input";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchTemplates } from "redux/templates/actionCreator";
import CategoryDropdown from "./categoryDropdown";
import DateDropdown from "./dateDropDown";
import OrderDropdown from "./orderDropdown";

const Header = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.templates.searchValue);

  //Two way binding for search input
  const [value, setValue] = useState("");

  const onChangedHandler = (e) => {
    setValue(e.target.value);
  };

  //Function to handle the result of submiting the search Input
  const onSubmitHandler = (e) => {
    e.preventDefault();
    searchTemplateHandler(value);
    // setValue("");
  };

  //Search function
  const searchTemplateHandler = (val) => {
    dispatch(searchTemplates(val));
  };

  // clear input Value if search is cleared
  useEffect(() => {
    if (!searchValue) setValue("");
  }, [searchValue]);

  return (
    <header className="px-8 md:px-16 py-8 flex flex-col sm:flex-row gap-4 lg:gap-0 justify-between">
      <form onSubmit={onSubmitHandler}>
        <Input
          type="search"
          placeholder="Search Templates"
          value={value}
          onChange={onChangedHandler}
          onSubmit={onSubmitHandler}
        />
      </form>
      <div className="flex items-center gap-1 md:gap-4">
        <span className="text-sm text-gray-400">Sort by:</span>
        <CategoryDropdown />
        <OrderDropdown />
        <DateDropdown />
      </div>
    </header>
  );
};

export default Header;
