import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const CartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.item); // returns a new
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        }
    } else if (action.type == "REMOVE") {

    }
    return defaultCartState
}

const CartProvider = props => {

    const  [cartState, dispatchCartAction] = useReducer(CartReducer, defaultCartState)
    const addItemToCartHandler = item => {
        dispatchCartAction({type: "ADD", item: item})
    }
    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: "REMOVE", id: id})
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider