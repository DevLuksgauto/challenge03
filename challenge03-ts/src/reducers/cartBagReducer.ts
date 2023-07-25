// Defina o tipo para o estado do carrinho de compras
interface CartBagState {
    cartBag: Item[];
  }
  
  // Defina o tipo para o item do carrinho de compras
  interface Item {
    id: number;
    name: string;
    price: string;
    // Outras propriedades do item, se houver...
  }
  
  // Defina o estado inicial
  const initialState: CartBagState = {
    cartBag: [],
  };
  
  // Defina o tipo para as ações do redutor
  type CartBagAction =
    | { type: 'ADD_TO_CART'; payload: Item }
    | { type: 'DELETE_ALL_FROM_CART' }
    | { type: 'DELETE_ITEM'; payload: number };
  
  // Redutor do carrinho de compras
  const cartBagReducer = (state = initialState, action: CartBagAction): CartBagState => {
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
          cartBag: state.cartBag.filter((item) => item.id !== itemIdToRemove),
        };
      default:
        return state;
    }
  };
  
  export default cartBagReducer;
  