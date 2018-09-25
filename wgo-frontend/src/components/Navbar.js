import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from "../redux/actions"
import { Button, Icon } from 'semantic-ui-react'

const NavBar = props =>{

  function updateUserOffline(){
    return (fetch('http://localhost:3001/user-update', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        location: 'offline'
      })
    }))
  }

  function clickHandler(){
    updateUserOffline()
    .then(()=>{
      localStorage.clear()
      props.logoutUser()
      props.history.push('/')
    })
  }

  return (

    <div className={`ui inverted green menu navbar`}>
      <NavLink activeClassName="ui active item" className="ui item" exact to="/map">
        <h3 className="ui header">
          <Icon color='orange' name='map outline' />
          <div className="content">WGO</div>
        </h3>
      </NavLink>
      {props.user ? (
        <React.Fragment>
          <span className="ui item">{`Logged in as: ${props.user.username}`}</span>
          <NavLink activeClassName="ui active item" className="ui item" exact to="/create-event">Create your event</NavLink>
          <Button className="ui item" onClick={clickHandler}>Logout</Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <NavLink exact to="/signup" className="ui item" activeClassName="ui active item">SignUp</NavLink>
          <NavLink exact to="/login" className="ui item" activeClassName="ui active item">Login</NavLink>
        </React.Fragment>
      )}
    </div>
  )
}

const mapStateToPros= state=>{
  return{user: state.user.current}
}
export default connect(mapStateToPros, {logoutUser})(NavBar);
