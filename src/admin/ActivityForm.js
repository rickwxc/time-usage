import React, { Component } from 'react';
import { Form, Divider, Message } from 'semantic-ui-react'



    /*
const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]
    <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
    */

export default class ActivityForm extends Component {
  constructor(props) {
    super(props);
    this.state  = {

      formStatus: {},
      showMessage: false,
      nameStatus: {},
      keyStatus: {},
      info: {
        header: '',
        content: '',
      },
      name: '',
      key: '',
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  clearStatus = () => {
      this.setState({
        showMessage: false,
        formStatus: {},
        nameStatus: {},
        keyStatus: {}
      })
  }

  handleSubmit = () => {
    this.clearStatus();
    if(this.state.name == '') {
      this.setState({
        info: {
          header: 'Missing Name',
          content: 'Please put activity name.',
        },
        showMessage: true,
        nameStatus: {error: true},
        formStatus: {error: true}
      })
      return
    }

    if(this.state.key == '') {
      this.setState({
        info: {
          header: 'Missing Code',
          content: 'Please put activity code.',
        },
        showMessage: true,
        keyStatus: {error: true},
        formStatus: {error: true}
      })
      return
    }

    this.props.onSaveNewActivity(this.state.name, this.state.key)
  }

  render() {
    return (
    <Form {...this.state.formStatus} onSubmit={this.handleSubmit}>
      <Form.Group widths='equal'>

        <Form.Input fluid label='Name'
        {...this.state.nameStatus} 
        onChange={this.handleChange}
        value={this.state.name} name='name' placeholder='name' />

        <Form.Input fluid label='Code'
        {...this.state.keyStatus} 
        onChange={this.handleChange}
        value={this.state.key} name='key' placeholder='code' />

      </Form.Group>
      {this.state.showMessage && (
        <Message 
        {...this.state.formStatus} 
        header={this.state.info.header} 
        content={this.state.info.content}  />
      )} 

      <Form.Button>Submit</Form.Button>

    </Form>
    )
  }

}
