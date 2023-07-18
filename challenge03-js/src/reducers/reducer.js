import { FETCH_DATA_SUCCESS } from "../actions/FetchAction";

const initialState = {
    data: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};

export default reducer;