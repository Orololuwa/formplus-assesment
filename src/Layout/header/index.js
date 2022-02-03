import { Input, Dropdown } from "components/input";
import { useSelector } from "react-redux";

const Header = () => {
  const data = useSelector((state) => state.templates.data);
  return (
    data && (
      <header className="px-8 md:px-16 py-8 flex flex-col sm:flex-row gap-4 lg:gap-0 justify-between">
        <Input type="search" placeholder="Search Templates" />
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
