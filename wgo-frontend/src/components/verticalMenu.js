import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from "../redux/actions"

class VerticalMenu extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  updateUserOffline =()=>{
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

  clickHandler= ()=>{
    this.updateUserOffline()
    .then(()=>{
      localStorage.clear()
      this.props.logoutUser()
    })
  }

  render() {
    const { visible } = this.state

    return (
      <div>
       <Button onClick={this.handleButtonClick}>Toggle visibility</Button>
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
          <NavLink activeClassName="ui active item" className="ui item" exact to="/create-event">
            <Menu.Item as='a'>
              Create your event
            </Menu.Item>
          </NavLink>
          <Button className="ui item" onClick={this.clickHandler}>
            <Menu.Item as='a'>
              Logout
            </Menu.Item>
          </Button>
          ) : (
          <NavLink exact to="/signup" className="ui item" activeClassName="ui active item">
            <Menu.Item as='a'>
              SignUp
            </Menu.Item>
          </NavLink>
          <NavLink exact to="/login" className="ui item" activeClassName="ui active item">
            <Menu.Item as='a'>
              Login
            </Menu.Item>
          </NavLink>
        </Sidebar>
        <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
      )}
    )
  }
}

const mapStateToPros= state=>{
  return{user: state.user.current}
}
export default connect(mapStateToPros, {logoutUser})(VerticalMenu);
