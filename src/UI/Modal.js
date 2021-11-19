import React from "react";
import ReactDOM from "react-dom";

import sytles from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={sytles.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
    return (
        <div className={sytles.modal}>
            <div className={sytles.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

function Modal(props) {
    return (
        <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement )}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    );
}

export default Modal;
