import axios from "axios";
import { GET_RECIPES, LOAD_RECIPES, RECIPES_ERROR } from "./types";
import { setAlert } from "./alert";

//@func getRecipes
//@desc gets all recipe information from API server
export const getRecipes = (ingredients) => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_RECIPES,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "/api/recipes",
      JSON.stringify({ ingredients }),
      config
    );
    dispatch({
      type: GET_RECIPES,
      payload: res.data,
    });
    dispatch(setAlert("Recipes retrieved successfully", "success"));
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
      type: RECIPES_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
    console.log(err);
  }
};
