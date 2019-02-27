import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react'

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
      code: '',
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
    if(this.state.name === '') {
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

    if(this.state.code === '') {
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

    this.props.newActivity({name: this.state.name, code: this.state.code})
    .then(() =>{
      this.setState({
        info: {
          header: 'Success',
          content: 'Saved!',
        },
        name: '',
        code: '',
        formStatus: { success: true },
        showMessage: true
      })
      setTimeout(this.clearStatus, 3000)
    }).catch(err => {
      this.setState({
        info: {
          header: 'Error',
          content: err.message,
        },
        formStatus: { error: true },
        showMessage: true
      })
    }); 
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
        value={this.state.code} name='code' placeholder='code' />

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
