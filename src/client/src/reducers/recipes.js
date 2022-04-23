import { GET_RECIPES, LOAD_RECIPES, RECIPES_ERROR, CLEAR_RECIPES } from "../actions/types";

const initalState = {
  listOfRecipes: [],
  loading: false,
  error: {}
};

//store for recipe data
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_RECIPES:
      return {
        ...state,
        loading: true,
      };
    case GET_RECIPES:
      return {
        ...state,
        listOfRecipes: payload,
        loading: false,
      };
    case RECIPES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_RECIPES:
      return {
        listOfRecipes: [],
        loading: false,
        error: {}
      }
    default:
      return state;
  }
}
