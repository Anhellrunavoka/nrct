import { nanoid } from 'nanoid';

export const CartActionTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CHANGE_QUANTITY: 'CHANGE_QUANTITY',
    FILL_CART: 'FILL_CART'
};

const CartReducer = (state, action) => {
    switch (action.type) {

        case CartActionTypes.ADD_TO_CART:
            const existingItem = state.find(
                item => item.id === action.payload.id
            );

            if (existingItem) {
                return state.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...state,
                {
                    ...action.payload,
                    cartId: nanoid(),
                    quantity: 1
                }
            ];

        case CartActionTypes.REMOVE_FROM_CART:
            return state.filter(
                item => item.id !== action.payload
            );

        case CartActionTypes.CHANGE_QUANTITY:
            return state.map(item =>
                item.id === action.payload.id
                    ? {
                          ...item,
                          quantity: action.payload.quantity
                      }
                    : item
            );

        case CartActionTypes.FILL_CART:
            return action.payload;

        default:
            return state;
    }
};

export default CartReducer;