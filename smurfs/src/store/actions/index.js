// actions index
import axios from "axios";

const url = "http://localhost:3333/smurfs";
export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const fetchSMURF = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURF });
        axios.get(url)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data[16] });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_SMURF_FAILURE, payload: "oops, that's not good..." });
        });
    };
};