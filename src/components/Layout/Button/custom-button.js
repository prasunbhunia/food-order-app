import React from "react";

import "./custom-button.css";

function CustomButton(props) {
    return (
        <button className={`button ${props.isCart ? 'is-cart': ''}`} onClick={props.onClick} >{props.children}</button>
    );
}

export default CustomButton;
