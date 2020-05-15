import { FETCH_SMURF, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE, ADD_SMURF } from "../actions";

const initialState = {
    isFetching: false,
    smurf: null,
    add: null,
    error: ""
};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurf: action.payload,
            };
        case ADD_SMURF:
            return {
                ...state,
                isFetching: false,
                add: action.payload,
            };
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
}; 