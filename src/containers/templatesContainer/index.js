import { useState } from "react";
import Pagination from "components/Pagination";
import TemplateCard from "components/templateCard";
import propTypes from "prop-types";

const Templates = (props) => {
  //Data from the store gotten from props
  const { data } = props;

  //Page Variables
  const pageSize = 12;
  const totalCount = data.length;

  //Page change functions
  const [currentPage, setCurrentPage] = useState(1);

  const pageChangedHandler = (page) => {
    setCurrentPage(page);
  };

  //Current Page data view functions which which is re-called when currentPage changes
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const currentData = data.slice(start, end);

  return (
    <section className="pt-2 pb-10">
      <div className="flex justify-between text-sm pt-5">
        <h6 className="text-gray-700">All Templates</h6>
        <p className="text-gray-400">{totalCount.toLocaleString()} templates</p>
      </div>
      <div className="templates py-8 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-y-8 justify-items-center">
        {currentData.map((temp, idx) => (
          <TemplateCard
            testId={`template-card${idx}`}
            key={idx}
            name={temp.name}
            description={temp.description}
            link={temp.link}
            category={temp.category}
            created={temp.created}
          />
        ))}
      </div>
      <Pagination
        pageSize={pageSize}
        totalCount={totalCount}
        currentPage={currentPage}
        onPageChange={pageChangedHandler}
      />
    </section>
  );
};

Templates.propTypes = {
  data: propTypes.array,
};

export default Templates;
