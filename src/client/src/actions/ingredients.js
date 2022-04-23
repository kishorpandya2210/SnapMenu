import axios from "axios";
import {
  GET_INGREDIENTS,
  LOAD_INGREDIENTS,
  INGREDIENTS_ERROR,
  DELETE_INGREDIENTS,
  ADD_INGREDIENTS,
} from "./types";
import { setAlert } from "./alert";

//@func getIngredients
//@desc Gets all ingredient information from API server
export const getIngredients = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_INGREDIENTS,
    });
    const res = await axios.post("/api/ingredients", formData);
    dispatch({
      type: GET_INGREDIENTS,
      payload: res.data,
    });
    dispatch(setAlert("Ingredients retrieved successfully", "success"));
  } catch (err) {
    dispatch(
      setAlert(
        `Could not fetch ingredients, ${
          err.response.data !== undefined &&
          err.response.data.errors !== undefined &&
          err.response.data.errors[0].msg
            ? err.response.data.errors[0].msg
            : err.response.statusText
        }, error code: ${err.response.status}`,
        "danger"
      )
    );
    dispatch({
      type: INGREDIENTS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
    console.log(err);
  }
};

//@func deleteIngredients
//@desc deletes ingredient information
export const deleteIngredients = (index) => (dispatch) => {
  dispatch({
    type: DELETE_INGREDIENTS,
    payload: index,
  });
};

//@func addIngredients
//@desc adds ingredient information
export const addIngredients = (ingredient) => (dispatch) => {
  dispatch({
    type: ADD_INGREDIENTS,
    payload: ingredient,
  });
};
