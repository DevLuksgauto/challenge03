// types.ts
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';

export type AppDispatch = ThunkDispatch<RootState, void, AppAction>

export type AppAction = Action<string>;
