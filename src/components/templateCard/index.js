import propTypes from "prop-types";

const TemplateCard = (props) => {
  const { name, description, link, category } = props;
  return (
    <div className="shadow-[0_4px_30px_rgba(0,0,0,0.08)]  w-80 rounded-sm cursor-pointer hover:scale-105 transition-transform">
      <div className="h-36 px-6 py-4">
        <h3 className="text-xl">{name}</h3>
        <p className="text-xs py-4">{description}</p>
        <span className="text-xs">Tags: </span>
        {category.map((cat, idx) => (
          <span className="text-xs" key={idx}>{cat} </span>
        ))}
      </div>
      <a
        className="bg-gray-50 text-green-500 px-6 py-4 block"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        Use Template
      </a>
    </div>
  );
};

TemplateCard.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
};

export default TemplateCard;
