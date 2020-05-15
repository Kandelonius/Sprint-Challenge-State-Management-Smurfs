// actions index
import axios from "axios";

const url = "http://localhost:3333/smurfs";
export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';

export const fetchSmurf = () => dispatch => {
    dispatch({ type: FETCH_SMURF });
    axios.get(url)
        .then(res => {
            console.log('res ', res);
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_SMURF_FAILURE, payload: "oops, that's not good..." });
        });
};
export const addSmurf = () => dispatch => {
    return axios.post(url, {
        name: "Sleepy",
        age: 200,
        height: "5cm",
        id: 1
    })
        .then(res => {
            console.log('pos', res);
            dispatch({ type: ADD_SMURF, payload: res.data });
        });
}