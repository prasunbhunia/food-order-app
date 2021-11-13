import React from "react";
import CustomButton from "../components/Layout/Button/custom-button";
import { ReactComponent as CartSvg } from "../assets/cart.svg";

import styles from "./header.module.css";

function HeaderContainer() {
    return (
        <>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <CustomButton isCart={false}>
                    <div className='cart-svg' to="/">
                        <CartSvg />
                    </div>
                    Your Cart 3
                </CustomButton>
            </header>
            <div className={styles["main-image"]}>
                <span className={styles.heading}>
                    <h1>Are you hungry ?</h1>
                    <h2>Don't Wait!!!</h2>
                    <h2>Let's start to order food now!</h2>
                </span>
                <img
                    src="https://i.ibb.co/9NpVrFv/header-img.jpg"
                    alt="header-img"
                />
            </div>
        </>
    );
}

export default HeaderContainer;
