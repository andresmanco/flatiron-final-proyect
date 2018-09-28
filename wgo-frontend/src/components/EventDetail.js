import React, {Component, Fragment} from 'react'
import { Image, Modal } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {unselectEvent} from '../redux/actions'
import Comments from './Comments'

class EventDetail extends Component{
  state={
    show: true
  }

  handleClose=()=>{
    this.setState({show: false})
    this.props.unselectEvent()
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
        <Modal.Header>{currentEvent.properties.title}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={currentEvent.properties.picture} />
          <Modal.Description>
            <table className='ui very basic celled table'>
              <tbody>
                <tr>
                  <td className="collapsing">Type of Event</td>
                  <td>{currentEvent.properties.type}</td>
                </tr>
                <tr>
                  <td>Dress code</td>
                  <td>{currentEvent.properties.dressCode}</td>
                </tr>
                <tr>
                  <td>Target Group</td>
                  <td>{currentEvent.properties.openTo}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{currentEvent.properties.price}</td>
                </tr>
                <tr>
                  <td>Ending Time</td>
                  <td>{currentEvent.properties.closingTime}</td>
                </tr>
              </tbody>
            </table>
          </Modal.Description>
        </Modal.Content>
        <Modal.Content>
          <h3>Description</h3>
          <p>{currentEvent.properties.description}</p>
          <Comments />
        </Modal.Content>
      </Modal>
      </Fragment>
    )
  }
}

const mapStateToProps= state=>{
  return {
    currentEvent: state.events.selected
  }
}

export default connect(mapStateToProps, {unselectEvent})(EventDetail)
