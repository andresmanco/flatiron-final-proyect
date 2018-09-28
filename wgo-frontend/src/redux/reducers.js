import {combineReducers} from 'redux';
import {
   LOGOUT_USER, LOGIN_USER, LOAD_USERS,
   CREATE_EVENT, CURRENT_EVENTS, EVENT_FILTER, SELECT_EVENT, UNSELECT_EVENT
 } from './types';


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


const eventReducer = (state= {all: [], filter: [], selected: null}, action)=>{
  switch (action.type) {
    case CREATE_EVENT:
      return {...state, all: [...state.all, action.event]}

    case CURRENT_EVENTS:
      return {...state, all: action.events}

    case EVENT_FILTER:
      return {...state, filter: action.events}

    case SELECT_EVENT:
      return {...state, selected: action.event}

    case UNSELECT_EVENT:
      return {...state, selected: null}

    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  events: eventReducer,
});
export default rootReducer;
