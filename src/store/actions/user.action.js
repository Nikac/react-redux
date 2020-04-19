import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const CREATE_USER = "CREATE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const GET_ERROR = "GET_ERROR";

const url = process.env.REACT_APP_BASE_URL;

export const getUsers = () => async (dispatch) => {
  console.log(url);
  return axios
    .get(`${url}`)
    .then((res) => dispatch({ type: GET_USERS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_ERROR, payload: err }));
};

export const getUser = (id) => async (dispatch) => {
  return axios
    .get(`url/${id}`)
    .then((res) => dispatch({ type: GET_USER, payload: res.data }))
    .catch((err) => dispatch({ type: GET_ERROR, payload: err }));
};

export const createUser = (user) => async (dispatch) => {
  return axios
    .post(url, user)
    .then((res) => dispatch({ type: CREATE_USER, payload: res.data }))
    .catch((err) => dispatch({ type: GET_ERROR, payload: err }));
};

export const updateUser = (user) => async (dispatch) => {
  return axios
    .put(`url/${user.id}`, user)
    .then((res) => dispatch({ type: UPDATE_USER, payload: res.data }))
    .catch((err) => dispatch({ type: GET_ERROR, payload: err }));
};

export const deleteUser = (user) => async (dispatch) => {
  return axios
    .delete(`url/${user.id}`)
    .then((res) => dispatch({ type: UPDATE_USER, payload: res.data }))
    .catch((err) => dispatch({ type: GET_ERROR, payload: err }));
};
