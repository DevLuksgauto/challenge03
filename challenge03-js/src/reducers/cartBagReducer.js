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
    case 'DELETE_ITEM':
    const itemIdToRemove = action.payload;
    return {
        ...state,
        cartBag: state.cartBag.filter(item => item.id !== itemIdToRemove)
    };
    default:
        return state;
    }
};

export default cartBagReducer;
