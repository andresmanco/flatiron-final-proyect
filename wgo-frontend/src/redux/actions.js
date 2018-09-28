import {
  LOGOUT_USER, LOGIN_USER, LOAD_USERS,
  CREATE_EVENT, CURRENT_EVENTS, EVENT_FILTER, SELECT_EVENT, UNSELECT_EVENT
 } from './types'

const baseUrl = "http://localhost:3001"

//LOGIN THE USER IN THE LOGIN FORM AND ALSO AFTER CREATE THE ACC
export function loginUser(user){
  return function(dispatch){
    return fetch(baseUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    })
      .then(res => {
        if (res.status === 204) {
          alert("login failed");
        } else {
          return res.json();
        }
      })
      .then(json => {
        if(json !== undefined){
          dispatch({type: LOGIN_USER, user: json.user})
          localStorage.setItem("token", json.token);
        }
      }
    )
  }
};

//THIS FUNCTION IS GONNA LOG OUT THE USER
export function logoutUser(){
  return {type: LOGOUT_USER, user: null}
}

//AFTER CHECK IF THERE IS A TOKEN, WE SEND THE INFO FROM IT TO KEEP THE USER LOGGED
export function checkUserLoged(){
  return function(dispatch){
    fetch(baseUrl + "/account", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res => {
      if (res.status === 401) {
        // alert("login failed");
      } else {
        return res.json();
      }
    }).then(json =>{
      if(json!== undefined){
        dispatch({type: LOGIN_USER, user: json})
      }
    })
  }
}

// ADD NEW EVENT IN THE DATABASE
export function fetchNewEvent(newEvent) {
  return function(dispatch) {
    fetch(baseUrl + '/events', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        event: newEvent
      })
    }).then(r=> r.json())
    .then(event=>{
      if(event!== undefined){
        dispatch({type: CREATE_EVENT, event})
      }
    })
  }
}


// GET ALL THE EVENTS AND FILTER JUST THE ONES ACTIVE!
export function getCurrentEvents(){
  return function(dispatch){
    fetch(baseUrl + '/events')
    .then(r=> r.json())
    .then(allEvents=>{
      let currentEvents = []
      currentEvents = allEvents.filter(event=> event.active === true)
      dispatch({type: CURRENT_EVENTS, events: currentEvents})
    })
  }
}


export function getActiveUsers(){
  return function(dispatch){
    fetch(baseUrl + '/active-users')
    .then(r=> r.json())
    .then(users=>{
      dispatch({type: LOAD_USERS, users})
    })
  }
}


export function filterEvents(events) {
  return {type: EVENT_FILTER, events}
}

export function selectEvent(event){
  return {type: SELECT_EVENT, event}
}

export function unselectEvent(){
  return {type: UNSELECT_EVENT}
}
