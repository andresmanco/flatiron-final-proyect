import React, {Component, Fragment} from 'react'
import { Segment, Grid, Image, Button, Card } from 'semantic-ui-react'
import {selectEvent} from '../redux/actions'
import EventDetail from './EventDetail'
import {connect} from 'react-redux'

class Profile extends Component{


  handleClick= event=>{
    this.props.selectEvent(event.id)
  }

  displayAllEvents=()=>{
    let userEvents = this.props.events.filter(event=>event.host.id === this.props.user.id)
    return userEvents.map(event=>{
        return (
          <Card>
            <Image src= {event.picture}/>
            <Card.Header style={{textAlign: 'center'}}>{event.title}</Card.Header>
            <br/>
            <br/>
            <Button onClick={()=>this.handleClick(event)}>Details</Button>
            {this.props.currentEvent !== null ?
            <EventDetail />
            : null }
          </Card>
        )
      })
    }


  render(){
    return(
      <Segment style={{top: '30px'}}>
        <Grid >
          <Grid.Column width={4}>
          <Image src={this.props.user.picture} />
          </Grid.Column>

          <Grid.Column width={6}>
          <h1 style={{textAlign: 'center'}}>{this.props.user.username}</h1>
          <br/>
          {this.props.user.fullname}
          <br/><br/>
          {this.props.user.email}
          <br/><br/>
          {this.props.user.about}
          </Grid.Column>
        </Grid>
        <Grid centered columns={2} >
            {this.displayAllEvents()}
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = state=>{
  return {
    user: state.user.current,
    events: state.events.all,
    currentEvent: state.events.selected
   }
}

export default connect(mapStateToProps, {selectEvent})(Profile)
