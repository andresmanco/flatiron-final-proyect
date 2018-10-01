import React, { Component, Fragment } from 'react';
import '../App.css';
import Login from './Login'
import NavBar from './Navbar'
import MapContainer from './map'
import Filter from './filter'
import CreateEvent from './createEvent'
import CreateAcc from './CreateAcc'
import { Menu, Segment, Sidebar, Icon } from 'semantic-ui-react'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCurrentEvents, checkUserLoged, getActiveUsers, getAllUsers, logoutUser} from '../redux/actions'

class App extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  clickHandler= ()=>{
    this.updateUserOffline()
    .then(()=>{
      localStorage.clear()
      this.props.logoutUser()
      this.setState({visible: false})
    })
  }

  updateUserOffline= ()=>{
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
    this.props.getAllUsers()
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
    const { visible } = this.state
    return (
        <BrowserRouter>
          <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            {this.props.user ? (
              <Fragment>
                <NavLink onClick={()=>this.setState({visible: false})} activeClassName="ui active item" className="ui item" exact to="/create-event">
                  <Menu.Item >Create your event</Menu.Item>
                </NavLink>
                <NavLink onClick={this.clickHandler} activeClassName="ui active item" className="ui item" exact to="/">
                  <Menu.Item>
                    <Icon name='log out'/>
                    Logout
                  </Menu.Item>
                </NavLink>
              </Fragment>
              ) : (
              <Fragment>
                <NavLink onClick={()=>this.setState({visible: false})} exact to="/signup" className="ui item" activeClassName="ui active item">
                  <Menu.Item>SignUp</Menu.Item>
                </NavLink>
                <NavLink onClick={()=>this.setState({visible: false})} exact to="/login" className="ui item" activeClassName="ui active item">
                  <Menu.Item>
                    <Icon name='sign in'/>
                    Login
                  </Menu.Item>
                </NavLink>
              </Fragment>
            )}
          </Sidebar>
          <Sidebar.Pusher dimmed={visible}>
            <Segment basic style={{minHeight: '100vh'}}>


                <React.Fragment>
                  <Route path='/' render={props=><NavBar {...props} handleButtonClick={this.handleButtonClick} />}/>
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


            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      </BrowserRouter>

    );
  }
}

const mapStateToPros= state=>{
  return {user: state.user.current}
}

export default connect(mapStateToPros, {getCurrentEvents ,checkUserLoged, getActiveUsers, getAllUsers, logoutUser})(App);
