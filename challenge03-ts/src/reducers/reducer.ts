import { FETCH_DATA_SUCCESS } from '../action/fetchAction'

// Define o tipo para o estado do redutor
interface ReducerState {
    data: any[]; // Substitua 'any' pelo tipo correto dos dados retornados pela API
  }
  
  // Define a ação FETCH_DATA_SUCCESS
  interface FetchDataSuccessAction {
    type: typeof FETCH_DATA_SUCCESS;
    payload: any[]; // Substitua 'any' pelo tipo correto dos dados retornados pela API
  }
  
  // Define o tipo de ação para o redutor
  type ReducerAction = FetchDataSuccessAction;
  
  // Define o estado inicial
  const initialState: ReducerState = {
    data: [],
  };
  
  // Redutor
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
  