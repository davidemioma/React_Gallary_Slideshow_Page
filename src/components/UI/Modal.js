import React from "react";
import reactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <img src={props.image} alt="" />
    </div>
  );
};

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {reactDom.createPortal(
        <ModalOverlay image={props.image}></ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Modal;
