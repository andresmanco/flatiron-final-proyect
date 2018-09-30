import React from 'react'
import {Comment} from 'semantic-ui-react'
import {connect} from 'react-redux'

const EventComment = props =>{

  function user() {

    return props.users.find(user=> user.id === props.comment.guest_id)
  }


  return(
    <Comment>
      <Comment.Content>
        <Comment.Author>{user().fullname}</Comment.Author>
        <Comment.Metadata>
          <div>{props.comment.created_at}</div>
        </Comment.Metadata>
        <Comment.Text>
          {props.comment.content}
        </Comment.Text>
      </Comment.Content>
    </Comment>
  )
}

const mapStateToProps = state=>{
  return {users: state.user.all}
}

export default connect(mapStateToProps)(EventComment)
