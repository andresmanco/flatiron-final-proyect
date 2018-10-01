import React, {Component, Fragment} from 'react'
import { Image, Modal, Button, Icon, Label} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {unselectEvent, fetchNewLike, fetchDeleteLike} from '../redux/actions'
import CommentsContainer from './CommentsContainer'

class EventDetail extends Component{
  state={
    show: true,
    likeButton: false
  }

  componentDidMount=()=>{
    if(this.props.currentUser){
      if(this.props.likes.find(like=> like.guest_id === this.props.currentUser.id)){
        this.setState({likeButton: true})
      }
    }
  }

  handleClose=()=>{
    this.setState({show: false})
    this.props.unselectEvent()
  }

  handleClick=()=>{
    if(this.props.currentUser){
      if(this.state.likeButton){
        let id = this.props.likes.find(like=> like.guest_id === this.props.currentUser.id).id
        this.props.fetchDeleteLike(id)
      }else{
        this.props.fetchNewLike(this.props.currentEvent.id)
      }
      this.setState({likeButton: !this.state.likeButton})
    }
    else{
      alert('You need to Log in to like or comment on events')
    }
  }

  render(){

    const {currentEvent}= this.props
    return(
      <Fragment>
      <Modal
      open={this.state.show}
      closeOnEscape={true}
      closeOnDimmerClick={true}
      onClose={this.handleClose}
      centered={false}>
        <Modal.Header>
          {currentEvent.title}
        </Modal.Header>
        <Modal.Content image scrolling>
          <Image wrapped size='medium' src={currentEvent.picture} />
          <Modal.Description>
            <table className='ui very basic celled table'>
              <tbody>
                <tr>
                  <td className="collapsing">Type of Event</td>
                  <td>{currentEvent.event_type}</td>
                </tr>
                <tr>
                  <td>Dress code</td>
                  <td>{currentEvent.dress_code}</td>
                </tr>
                <tr>
                  <td>Target Group</td>
                  <td>{currentEvent.open_to}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{currentEvent.price}</td>
                </tr>
                <tr>
                  <td>Ending Time</td>
                  <td>{currentEvent.closing_time}</td>
                </tr>
              </tbody>
            </table>
          </Modal.Description>
        </Modal.Content>
            {this.state.likeButton ?
              <div style={{textAlign:'center'}} >
                <Button onClick={this.handleClick} color='red'>
                  <Icon name='heart outline' />
                </Button>
                <Label as='a' basic color='red' pointing='left'>
                  {this.props.likes.length}
                </Label>
              </div>
              :
              <div style={{textAlign:'center'}} >
                <Button onClick={this.handleClick} color='red'>
                  <Icon name='heart' />
                </Button>
                <Label as='a' basic color='red' pointing='left'>
                  {this.props.likes.length}
                </Label>
              </div>
            }
        <Modal.Content>
          <CommentsContainer />
        </Modal.Content>
      </Modal>
      </Fragment>
    )
  }
}

const mapStateToProps= state=>{
  return {
    currentEvent: state.events.selected,
    likes: state.events.likesOfSelected,
    currentUser: state.user.current
  }
}

export default connect(mapStateToProps, {unselectEvent, fetchNewLike, fetchDeleteLike})(EventDetail)
