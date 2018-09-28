import React, {Component, Fragment} from 'react'
import { Comment, Header, Form, Button } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {selectEvent} from '../redux/actions'

class Comments extends Component{
  state={
    comment: ''
  }

  handleChange= (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit =(e)=> {
    e.preventDefault();
  }


  render(){
    const {currentEvent}= this.props
    return(
      <Fragment>
      <Comment.Group size='mini'>
        <Header as='h3' dividing>
          Comments
        </Header>
        <Comment>
          <Comment.Content>
            <Comment.Author as='a'>Admin</Comment.Author>
            <Comment.Text>{currentEvent.properties.description}</Comment.Text>
            <Comment.Metadata>
              <span>Look at all the comments</span>
            </Comment.Metadata>
          </Comment.Content>
        </Comment>
        <Form reply onSubmit={this.handleSubmit}>
          <Form.TextArea onChange={this.handleChange} name='comment' placeholder='Write a comment' />
          <Button content='Submit' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>
      </Fragment>
    )
  }
}

const mapStateToProps= state=>{
  return {
    currentEvent: state.events.selected
  }
}

export default connect(mapStateToProps)(Comments)
