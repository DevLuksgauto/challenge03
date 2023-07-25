import { combineReducers } from 'redux';
import cartBagReducer from './cartBagReducer';
import reducer from './reducer';

// Define o tipo para o estado da store
interface RootState {
  cart: ReturnType<typeof cartBagReducer>;
  reducer: ReturnType<typeof reducer>;
}

// Combina os redutores usando combineReducers
const rootReducer = combineReducers<RootState>({
  cart: cartBagReducer,
  reducer: reducer
});

export default rootReducer;