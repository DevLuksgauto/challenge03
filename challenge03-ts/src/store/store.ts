import { createStore, applyMiddleware, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer, { RootState } from '../reducers/rootReducer';
import { Action } from 'redux';

type ThunkAction = ThunkMiddleware<RootState, Action>;

const store: Store<RootState, Action> = createStore(rootReducer, applyMiddleware(thunk as ThunkAction));

export default store;
