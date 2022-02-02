import { useEffect } from "react";
import Banner from "components/banner";
import WarningIcon from "assets/images/png/warning.png";
import Templates from "containers/templatesContainer";
import { useDispatch } from "react-redux";
import { fetchTemplates } from "redux/templates/actionCreator";

const Content = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTemplates());
  }, []);

  return (
    <main className="px-8 md:px-16">
      <Banner>
        <img src={WarningIcon} alt="warning Icon" className="mr-6 w-4 h-4" />
        <span className="text-sm ">
          Tada! Get started with a free template. Can’t find what you are
          looking for? Search from the 1000+ available templates
        </span>
      </Banner>
      <Templates />
    </main>
  );
};

export default Content;
