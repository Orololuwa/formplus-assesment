import { createPortal } from "react-dom";
import BackdropCtx from "./styled";
import propTypes from "prop-types";
import { useEffect } from "react";

const backdropRoot = document.getElementById("backdrop");

const Backdrop = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "scroll";
    };
  });

  return createPortal(
    <BackdropCtx onClick={props.onConfirm}>{props.children}</BackdropCtx>,
    backdropRoot
  );
};

Backdrop.propTypes = {
  onConfirm: propTypes.func,
};

export default Backdrop;
