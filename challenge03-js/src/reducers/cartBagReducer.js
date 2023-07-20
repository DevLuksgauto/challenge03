const initialState = {
    cartBag: [],
};

const cartBagReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_TO_CART':
        return {
        ...state,
        cartBag: [...state.cartBag, action.payload],
        };
        case 'DELETE_ALL_FROM_CART':
    return {
        ...state,
        cartBag: [],
    };
    case 'DECREASE_CART_ITEM_QUANTITY':
    const itemIdToRemove = action.payload;
    return {
        ...state,
        cartBag: state.cartBag.map(item =>
        item.id === itemIdToRemove ? { ...item, quantity: item.quantity - 1 } : item
        ),
    };
    default:
        return state;
    }
};

export default cartBagReducer;
