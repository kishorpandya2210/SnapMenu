import { combineReducers } from 'redux';
import ingredients from './ingredients';
import recipes from './recipes';
import alerts from './alert';
import auth from './auth';

//parent store for all data
export default combineReducers({ ingredients, recipes, alerts, auth });
