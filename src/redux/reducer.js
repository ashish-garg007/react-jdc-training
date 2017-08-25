import { combineReducers } from 'redux';
import * as ActionType from './action';

//inital state
const initalStateProfile = {
  isAuthenticated: false
};

//Individual reducers
const profile = (state = initalStateProfile, action) => {
  switch (action.type) {
    case ActionType.ProfileAction.RECEIVE_PROFILE:
      return retrieveProfileFromToken(state, action);
    case ActionType.ProfileAction.LOGOUT:
      return logout(state, action);
    default:
      return state;
  }
};

//Mutation function
function retrieveProfileFromToken(state, action) {
  return Object.assign({}, state, action.profile, {
    isAuthenticated: true
  });
}

//Mutation function
function logout(state, action) {
  return Object.assign({}, state, action.profile, {
    isAuthenticated: false
  });
}

//Combined reducers
const rootReducers = combineReducers({
  profile
});

export default rootReducers;
