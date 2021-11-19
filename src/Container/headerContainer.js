import React, { useContext } from "react";
import CustomButton from "../components/Layout/Button/custom-button";
import { ReactComponent as CartSvg } from "../assets/cart.svg";
import CartContext from "../store/cart-context";
import styles from "./header.module.css";

function HeaderContainer(props) {
    const ctx = useContext(CartContext);
    const numberOfCartItems = ctx.items.reduce((curNumber , item) => {
        return curNumber + item.amount
    }, 0)
    
    return (
        <>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <CustomButton isCart='false' onClick={props.onShowCart}>
                    <div className='cart-svg' to="/">
                        <CartSvg />
                    </div>
                    Your Cart {numberOfCartItems}
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
