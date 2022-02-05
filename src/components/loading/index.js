import LoadingCtx from "./styled";
import theme from "theme";
import propTypes from "prop-types";

const Loading = (props) => (
  <div
    className={`fixed top-0 left-0 h-screen w-screen z-50 bg-[${theme.colors.black.toString()}64]`}
  >
    <LoadingCtx {...props}>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </LoadingCtx>
  </div>
);

Loading.defaultProps = {
  size: "11em",
  color: "gray",
};

Loading.propTypes = {
  size: propTypes.string,
  color: propTypes.string,
};

export default Loading;
