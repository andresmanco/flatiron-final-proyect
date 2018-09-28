import React, { Component } from 'react';
import '../App.css';
import Login from './Login'
import NavBar from './Navbar'
import MapContainer from './map'
import Filter from './filter'
import CreateEvent from './createEvent'
import CreateAcc from './CreateAcc'
import {connect} from 'react-redux'
import {getCurrentEvents, checkUserLoged, getActiveUsers} from '../redux/actions'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {

  updateUserLocation= ()=>{
    this.props.getActiveUsers()
    if(this.props.user !== null){
      navigator.geolocation.getCurrentPosition(p=>{

        fetch('http://localhost:3001/user-update', {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            location: `${p.coords.longitude} ${p.coords.latitude}`
          })
        })
      })
    }
  }

  componentDidMount(){
    if(localStorage.getItem('token')){
      this.props.checkUserLoged()
    }
    this.props.getCurrentEvents()
    this.locationInterval = setInterval(this.updateUserLocation, 10000)
  }

  componentWillUnmount() {
    clearInterval(this.locationInterval);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <Route path='/' render={props=><NavBar {...props} />}/>
            <Route exact path='/' render={props=> <MapContainer {...props} />} />
            <Route exact path='/' render={props=> <Filter {...props} />} />
            {this.props.user ?
              <Route exact path="/create-event" render={props=> <CreateEvent {...props}/>} />
              :
              <React.Fragment>
                <Route exact path='/signup' render={props=> <CreateAcc {...props} updateUserLocation={this.updateUserLocation} />} />
                <Route exact path="/login" render={props=> <Login {...props} updateUserLocation={this.updateUserLocation} />} />
              </React.Fragment>
            }
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToPros= state=>{
  return {user: state.user.current}
}

export default connect(mapStateToPros, {getCurrentEvents ,checkUserLoged, getActiveUsers})(App);
