import { combineReducers } from 'redux';
import cartBagReducer from './cartBagReducer';
import reducer from './reducer';

export interface Item {
  id: number;
  name: string;
  price: number | string;
}

export interface RootState {
  cart: ReturnType<typeof cartBagReducer>;
  reducer: ReturnType<typeof reducer>;
}

const rootReducer = combineReducers<RootState>({
  cart: cartBagReducer,
  reducer: reducer
});

export default rootReducer;