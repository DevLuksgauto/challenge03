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

export const deleteCartItem = (itemId) => {
    return {
    type: 'DELETE_ITEM',
    payload: itemId,
    };
};