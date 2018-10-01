import {combineReducers} from 'redux';
import {
   LOGOUT_USER, LOGIN_USER, LOAD_USERS, GET_USERS,
   CREATE_EVENT, CURRENT_EVENTS, EVENT_FILTER, SELECT_EVENT, UNSELECT_EVENT, USER_EVENT,
   ADD_COMMENT, DELETE_COMMENT,
   ADD_LIKE, DELETE_LIKE
 } from './types';


const userReducer = (state= {current: null, active: [], all: []}, action)=>{
  switch (action.type) {
    case LOGIN_USER:
      if(state.all.includes(action.user)){
        return {...state, current: action.user}
      }else{
        return {...state, current: action.user, all: [...state.all, action.user]}
      }

    case LOGOUT_USER:
      return {...state, current: action.user}

    case LOAD_USERS:
      return {...state, active: action.users}

    case GET_USERS:
    return { ...state, all: action.users}

    default:
      return state
  }
}


const eventReducer= (state={all:[], filter:[], selected:null, commentsOfSelected:[], likesOfSelected:[], userEvent:null}, action)=>{
  switch (action.type) {
    case CREATE_EVENT:
      return {...state, all: [...state.all, action.event]}

    case CURRENT_EVENTS:
      return {...state, all: action.events}

    case EVENT_FILTER:
      return {...state, filter: action.events}

    case SELECT_EVENT:
      let selected = state.all.find(event=> event.id === action.id)
      return {...state, selected, commentsOfSelected: selected.comments, likesOfSelected: selected.likes}

    case UNSELECT_EVENT:
      return {...state, selected: null}

    case ADD_COMMENT:
      let current = null
      let allE = state.all.map(event=>{
        if(event.id === state.selected.id){
          event.comments=[...event.comments, action.comment]
          current = event
        }
        return event
      })
      return {...state, all: allE, selected: current, commentsOfSelected: current.comments}

    case DELETE_COMMENT:
      allE = state.all.map(event=>{
        if(event.id === state.selected.id){
          event.comments = event.comments.filter(comment=> comment.id !== action.id)
          current = event
        }
        return event
      })
      return {...state, all: allE, selected: current, commentsOfSelected: current.comments}

    case ADD_LIKE:
      allE = state.all.map(event=>{
        if(event.id === state.selected.id){
          event.likes=[...event.likes, action.like]
          current = event
        }
          return event
      })
      return {...state, all: allE, selected: current, likesOfSelected: current.likes}

    case DELETE_LIKE:
      allE = state.all.map(event=>{
        if(event.id === state.selected.id){
          event.likes = event.likes.filter(like=> like.id !== action.id)
          current = event
        }
          return event
      })
    return {...state, all: allE, selected: current, likesOfSelected: current.likes}

    case USER_EVENT:
      return {...state, userEvent: action.event}

    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  events: eventReducer,
});
export default rootReducer;
