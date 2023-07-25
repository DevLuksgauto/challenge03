import { createStore, applyMiddleware, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer, { RootState } from '../reducers/rootReducer';
import { Action } from 'redux';

// Define o tipo para o middleware Thunk
type ThunkAction = ThunkMiddleware<RootState, Action>;

// Define o tipo para a store da aplicação
const store: Store<RootState, Action> = createStore(rootReducer, applyMiddleware(thunk as ThunkAction));

export default store;
