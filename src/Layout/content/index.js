import { useEffect } from "react";
import Banner from "components/banner";
import WarningIcon from "assets/images/png/warning.png";
import Templates from "containers/templatesContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemplates } from "redux/templates/actionCreator";
import Loading from "components/loading";
import Error from "components/error";

const Content = () => {
  //Dispatch action to fetch the templates from the API
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTemplates());
  }, []);

  //Data, loading state and error state from the store
  const { data, loading, error } = useSelector((state) => ({
    data: state.templates.renderedData,
    loading: state.templates.loading,
    error: state.templates.error,
  }));

  return (
    <main className="px-8 md:px-16">
      {!!data.length && (
        <>
          <Banner>
            <img
              src={WarningIcon}
              alt="warning Icon"
              className="mr-6 w-4 h-4"
            />
            <span className="text-sm ">
              Tada! Get started with a free template. Can’t find what you are
              looking for? Search from the 1000+ available templates
            </span>
          </Banner>
          <Templates data={data} loading={loading} error={error} />
        </>
      )}
      {loading && <Loading />}
      {error && <Error>{error}</Error>}
    </main>
  );
};

export default Content;
