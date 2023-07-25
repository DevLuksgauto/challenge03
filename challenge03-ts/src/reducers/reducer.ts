import { FETCH_DATA_SUCCESS } from '../action/fetchAction'

interface ReducerState {
    data: any[];
  }
  
  interface FetchDataSuccessAction {
    type: typeof FETCH_DATA_SUCCESS;
    payload: any[];
  }
  
  type ReducerAction = FetchDataSuccessAction;
  
  const initialState: ReducerState = {
    data: [],
  };
  
  const reducer = (state = initialState, action: ReducerAction): ReducerState => {
    switch (action.type) {
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  