interface CartBagState {
    cartBag: Item[];
  }
  
  interface Item {
    id: number;
    name: string;
    price: string;
  }
  
  const initialState: CartBagState = {
    cartBag: [],
  };
  
  type CartBagAction =
    | { type: 'ADD_TO_CART'; payload: Item }
    | { type: 'DELETE_ALL_FROM_CART' }
    | { type: 'DELETE_ITEM'; payload: number };
  
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
  