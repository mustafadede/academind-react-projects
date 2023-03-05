import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = props => {
    const [btnIsHigh, IsBtnIsHigh] = useState(false)

    const CartCtx = useContext(CartContext);
    const numberOfCartItems = CartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount
    }, 0);

    const {items} = CartCtx
    const btnClasses = `${classes.button} ${btnIsHigh ? classes.bump : ''}`

    useEffect(() => {
        if(items.length === 0) return;
        IsBtnIsHigh(true)

        const timer = setTimeout(() => {
            IsBtnIsHigh(false)
        }, 300);

        return () => {
            clearTimeout(timer)
        }
    },[items])

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
};

export default HeaderCartButton;