import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const CartReducer = (state, action) => {
    if (action.type === "ADD") {
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCarTItemIndex = state.items.findIndex((item) => item.id === action.item.id)

        const existingCartItem = state.items[existingCarTItemIndex]
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCarTItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item); // returns a new
        }
        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        }
    }

    if (action.type === "REMOVE") {
        const existingCarTItemIndex = state.items.findIndex((item) => item.id === action.id)
        const existingItem = state.items[existingCarTItemIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.price
        let updatedItems
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1}
            updatedItems = [...state.items]
            updatedItems[existingCarTItemIndex] = updatedItem
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
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