import {
  AUTH_ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
  CLEAR_RECIPES,
  CLEAR_INGREDIENTS,
} from "./types";

import { setAlert } from "./alert";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

//@func login
//@desc logs the user in to their account
export const login = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const formData = {};
  data.forEach((value, key) => (formData[key] = value));
  var body = JSON.stringify(formData);

  try {
    const res = await axios.post("/api/auth", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};


//@func loadUser
//@desc loads all user information after logging in
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//@func register
//@desc register user account
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const newUser = { name, email, password };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const body = JSON.stringify(newUser);
      const res = await axios.post("/api/users", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

//@func logout
//@desc logs the user out of their account
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  dispatch({
    type: CLEAR_PROFILE,
  });
  dispatch({
    type: CLEAR_RECIPES,
  });
  dispatch({
    type: CLEAR_INGREDIENTS,
  });
};
