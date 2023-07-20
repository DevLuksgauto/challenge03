export const addToCartBag = (item) => {
    return {
    type: 'ADD_TO_CART',
    payload: item,
    };
};

export const deleteAllFromCartBag = () => {
    return {
    type: 'DELETE_ALL_FROM_CART',
    };
};

export const decreaseCartItemQuantity = (itemId) => {
    return {
    type: 'DECREASE_CART_ITEM_QUANTITY',
    payload: itemId,
    };
};