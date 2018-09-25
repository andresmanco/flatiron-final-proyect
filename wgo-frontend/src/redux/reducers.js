import {combineReducers} from 'redux';
import { CURRENT_EVENTS, LOGOUT_USER, LOGIN_USER, CREATE_EVENT, LOAD_USERS } from './types';


const userReducer = (state= {current: null, active: []}, action)=>{
  switch (action.type) {
    case LOGIN_USER:
      return {...state, current: action.user}

    case LOGOUT_USER:
      return {...state, current: action.user}

    case LOAD_USERS:
      return {...state, active: action.users}

    default:
      return state
  }
}


const eventReducer = (state = [], action)=>{
  switch (action.type) {
    case CREATE_EVENT:
      return [...state, action.event]

    case CURRENT_EVENTS:
      return action.events

    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  events: eventReducer,
});
export default rootReducer;
