import TemplateCard from "components/templateCard";

const Templates = () => {
  return (
    <section className="">
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
    </section>
  );
};

export default Templates;
