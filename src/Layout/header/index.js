import { Input, Dropdown } from "components/input";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchTemplates } from "redux/templates/actionCreator";
import { templatesSearchClear } from "redux/templates/actions";

const Header = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.templates.data);

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

  return (
    data && (
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
          <Dropdown
            placeholder="category"
            options={["all", "education", "e-commerce", "health"]}
          />
          <Dropdown
            placeholder="Order"
            options={["default", "ascending", "descending"]}
          />
          <Dropdown
            placeholder="Date"
            options={["default", "ascending", "descending"]}
          />
        </div>
      </header>
    )
  );
};

export default Header;
