// Importe os tipos necessários, se aplicável
// import { SomeType } from 'some-library';

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface AddToCartAction {
  type: 'ADD_TO_CART';
  payload: CartItem;
}

interface DeleteAllFromCartAction {
  type: 'DELETE_ALL_FROM_CART';
}

interface DeleteCartItemAction {
  type: 'DELETE_ITEM';
  payload: number;
}

type CartActionTypes = AddToCartAction | DeleteAllFromCartAction | DeleteCartItemAction;

export const addToCartBag = (item: CartItem): CartActionTypes => {
  return {
    type: 'ADD_TO_CART',
    payload: item,
  };
};

export const deleteAllFromCartBag = (): CartActionTypes => {
  return {
    type: 'DELETE_ALL_FROM_CART',
  };
};

export const deleteCartItem = (itemId: number): CartActionTypes => {
  return {
    type: 'DELETE_ITEM',
    payload: itemId,
  };
};