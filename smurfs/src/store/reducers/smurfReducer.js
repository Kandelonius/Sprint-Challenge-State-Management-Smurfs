import { FETCH_SMURF, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE } from "../actions";

const initialState = {
    isFetching: false,
    smurf: null,
    // name: null,
    // age: null,
    // height: null,
    // id: null,
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