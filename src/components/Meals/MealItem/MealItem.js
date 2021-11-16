import React, {useContext} from "react";
import MealItenForm from "./MealItenForm";
import CartContext from "../../../store/cart-context";

import styles from "./MealItem.module.css";

function MealItem(props) {
    const ctx = useContext(CartContext);
    const addToCartHandler = (amount) => {
        ctx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>₹ {props.price}</div>
            </div>
            <div>
                <MealItenForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
}

export default MealItem;
