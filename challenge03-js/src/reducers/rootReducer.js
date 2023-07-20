import { combineReducers } from 'redux';
import reducer from './reducer';
import cartBagReducer from './cartBagReducer';

const rootReducer = combineReducers({
    cart: cartBagReducer,
    reducer: reducer
});

export default rootReducer;
