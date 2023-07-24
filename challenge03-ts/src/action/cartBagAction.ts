import { CartItem } from '../types'; // Certifique-se de importar o tipo 'CartItem' corretamente de onde ele estiver definido.

export const addToCartBag = (item: CartItem) => {
  return {
    type: 'ADD_TO_CART' as const,
    payload: item,
  };
};

export const deleteAllFromCartBag = () => {
  return {
    type: 'DELETE_ALL_FROM_CART' as const,
  };
};

export const decreaseCartItemQuantity = (itemId: number) => {
  return {
    type: 'DECREASE_CART_ITEM_QUANTITY' as const,
    payload: itemId,
  };
};

// Outros tipos relevantes que possam ser usados no código:
// types.ts
// export type CartItem = {
//   id: number;
//   name: string;
//   price: string;
//   // Outros campos relevantes do item do carrinho...
// };
