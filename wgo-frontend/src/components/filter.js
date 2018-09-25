import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button, Form } from 'semantic-ui-react'

const eventType = [
  {text: 'All', value: 'All'},
  {text: 'Artistic', value: 'Artistic'},
  {text: 'Games', value: 'Game'},
  {text: 'Concert', value: 'Concert'},
  {text: 'Fair', value: 'Fair'},
  {text: 'Farmers Market', value: 'Farmers Market'},
  {text: 'Garage Sale', value: 'Garage Sale'},
  {text: 'Party', value: 'Party'},
  {text: 'Street Performance', value: 'Street Performance'},
  {text: 'Sport', value: 'Sport'},
  {text: 'Other', value: 'Other'}
]

  const openTo = [
    {text: 'All public', value: 'public'},
    {text: '18+', value: '18+'},
    {text: '21+', value: '21+'},
    {text: '25+', value: '25+'},
    {text: 'Families', value: 'Families'}
  ]

const price= [
  {text: 'Free', value: 'Free'},
  {text: 'Accept Donations', value: 'Donation'},
  {text: 'Cover', value: 'Amount'},
]

class Filter extends Component {
  state = {
    eventType: '',
    openTo: '',
    price: ''
  }

  handleChangeComboBox = (e, { value }, name) => {
    if(value === 'amount'){
      this.setState({pay: true, price: ''})
    }else{
      this.setState({pay: false})
    }
    this.setState({ [name]: value })
  }

  handleSubmit= e=>{
    e.preventDefault()

  }

  render(){
    return(
      <div className='ui card filter'>
      <Form onSubmit={this.handleSubmit}>
        <h3 style={{textAlign: 'center'}}>Filter</h3>
        <p style={{textAlign: 'center'}}>Filter the events!<br/>See just what you are interested in</p>
        <Form.Group widths='equal'>
          <Form.Select onChange={(e, value)=>this.handleChangeComboBox(e, value, 'eventType')} fluid label='Type' options={eventType} placeholder='Type' />
          <Form.Select onChange={(e, value)=>this.handleChangeComboBox(e, value, 'openTo')} fluid label='Who is this event for?' options={openTo} placeholder='Who is this event for?' />
          <Form.Select onChange={(e, value)=>this.handleChangeComboBox(e, value, 'price')} fluid label='Price' options={price} placeholder='Who is this event for?' />
        </Form.Group>
      <Button type='submit'>Submit</Button>
      </Form>
    </div>
    )
  }
}

const mapStateToPros = state=>{
  return {events: state.events}
}

export default connect(mapStateToPros)(Filter)
