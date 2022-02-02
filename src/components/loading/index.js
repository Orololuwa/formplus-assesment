import LoadingCtx from "./styled";
import Backdrop from "components/backdrop";
import propTypes from "prop-types";

const Loading = (props) => (
  <Backdrop>
    <LoadingCtx {...props}>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </LoadingCtx>
  </Backdrop>
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
