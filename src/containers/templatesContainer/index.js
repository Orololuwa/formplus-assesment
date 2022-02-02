import { useState } from "react";
import Pagination from "components/Pagination";
import TemplateCard from "components/templateCard";

const Templates = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageChangedHandler = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="pt-2 pb-10">
      <div className="flex justify-between text-sm pt-5">
        <h6 className="text-gray-700">All Templates</h6>
        <p className="text-gray-400">2000 templates</p>
      </div>
      <div className="templates py-8 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-y-8 justify-items-center">
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </div>
      <Pagination
        pageSize={3}
        totalCount={11}
        currentPage={currentPage}
        onPageChange={pageChangedHandler}
      />
    </section>
  );
};

export default Templates;
