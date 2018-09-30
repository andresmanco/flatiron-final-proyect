import React, {Component, Fragment} from 'react'
import { Comment, Header, Form, Button } from 'semantic-ui-react'
import EventComment from './EventComment'
import {connect} from 'react-redux'
import {fetchNewComment} from '../redux/actions'


class CommentsContainer extends Component{
  state={
    comment: '',
    show: false
  }

  handleClick= ()=>{
    this.setState({show: true})
  }

  handleChange= (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit =(e)=> {
    e.preventDefault();
    this.props.fetchNewComment(this.state.comment, this.props.currentEvent.id)
    this.setState({comment: ''})
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
            <Comment.Text>{currentEvent.description}</Comment.Text>
            <Comment.Metadata>
              <span onClick={this.handleClick}>Look at all the comments</span>
            </Comment.Metadata>
            {this.state.show ?
              this.props.comments.map(comment=><EventComment key={comment.id} comment={comment}/>)
          : null}
          </Comment.Content>
        </Comment>
        <Form reply onSubmit={this.handleSubmit}>
          <Form.TextArea onChange={this.handleChange} value={this.state.comment} name='comment' placeholder='Write a comment' />
          <Button content='Submit' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>
      </Fragment>
    )
  }
}

const mapStateToProps= state=>{
  return {
    currentEvent: state.events.selected,
    comments: state.events.commentsOfSelected
  }
}

export default connect(mapStateToProps, {fetchNewComment})(CommentsContainer)
