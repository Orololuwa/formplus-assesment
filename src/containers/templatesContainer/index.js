import { useMemo, useState } from "react";
import Pagination from "components/Pagination";
import TemplateCard from "components/templateCard";

const Templates = () => {
  //Data from the store
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  //Page Variables
  const pageSize = 3;
  const totalCount = 11;

  //Page change functions
  const [currentPage, setCurrentPage] = useState(1);

  const pageChangedHandler = (page) => {
    setCurrentPage(page);
  };

  //Current Page data view functions
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return data.slice(start, end);
  }, [currentPage]);

  return (
    <>
      {data && (
        <section className="pt-2 pb-10">
          <div className="flex justify-between text-sm pt-5">
            <h6 className="text-gray-700">All Templates</h6>
            <p className="text-gray-400">{totalCount} templates</p>
          </div>
          <div className="templates py-8 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-y-8 justify-items-center">
            {currentData.map((temp, idx) => (
              <TemplateCard key={idx} />
            ))}
          </div>
          <Pagination
            pageSize={pageSize}
            totalCount={totalCount}
            currentPage={currentPage}
            onPageChange={pageChangedHandler}
          />
        </section>
      )}
    </>
  );
};

export default Templates;
