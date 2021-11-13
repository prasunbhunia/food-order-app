import React from "react";

import "./custom-button.css";

function CustomButton({ children, isCart }) {
    return (
        <button className={`button ${isCart ? 'is-cart': ''}`}>{children}</button>
    );
}

export default CustomButton;
