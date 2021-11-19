import React from "react";
import Modal from "../../UI/Modal";

import style from "./Cart.module.css";

function Cart(props) {
    const cardItem = (
        <ul className={style['cart-item']}>
            {[{ id: "c1", name: "Sushi", amount: 2, price: 500 }].map(
                (item) => (
                    <li>{item.name}</li>
                )
            )}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cardItem}
            <div className={style.total}>
                <span>Total Amount</span>
                <spna>35.6</spna>
            </div>
            <div className={style.actions}>
                <button className={style['button-alt']}  onClick={props.onClose} >Close</button>
                <button classmame={style.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;
 