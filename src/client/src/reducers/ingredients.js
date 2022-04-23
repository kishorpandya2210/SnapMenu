import {
  GET_INGREDIENTS,
  LOAD_INGREDIENTS,
  INGREDIENTS_ERROR,
  DELETE_INGREDIENTS,
  ADD_INGREDIENTS,
  CLEAR_INGREDIENTS,
} from "../actions/types";

const initalState = {
  listOfIngredients: [],
  loading: false,
  error: {},
};

//store for ingredient data
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_INGREDIENTS:
      return {
        ...state,
        loading: true,
      };
    case GET_INGREDIENTS:
      return {
        ...state,
        listOfIngredients: payload,
        loading: false,
      };
    case INGREDIENTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case DELETE_INGREDIENTS:
      return {
        ...state,
        listOfIngredients: state.listOfIngredients.filter(
          (ingredient) => ingredient !== payload
        ),
      };
    case ADD_INGREDIENTS:
      return {
        ...state,
        listOfIngredients: [...state.listOfIngredients, payload],
      };
    case CLEAR_INGREDIENTS:
      return {
        listOfIngredients: [],
        loading: false,
        error: {},
      };
    default:
      return state;
  }
}
