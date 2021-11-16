import React, { useState } from "react";
import Cart from "../components/Cart/Cart";
import Meals from "../components/Meals/Meals";
import HeaderContainer from "../Container/headerContainer";
import CartProvider from "../store/cart-provider";

function Home(props) {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };
    const hideCartHander = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHander} />}
            <HeaderContainer onShowCart={showCartHandler} />
            <Meals />
        </CartProvider>
    );
}

export default Home;
