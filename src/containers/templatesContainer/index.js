import TemplateCard from "components/templateCard";

const Templates = () => {
  return (
    <section className="">
      <div className="flex justify-between text-sm pt-5">
        <h6 className="text-gray-700">All Templates</h6>
        <p className="text-gray-400">2000 templates</p>
      </div>
      <div className="templates py-5">
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </div>
    </section>
  );
};

export default Templates;
