import React, { Component } from 'react';
import ActivityForm from './ActivityForm';
import ActivityList from './ActivityList';
import { Divider } from 'semantic-ui-react'

export default class Admin extends Component { 
  render() {
    return (
      <div>
        <br />
        <ActivityList {...this.props} />
        <Divider />
        <ActivityForm {...this.props} />
      </div>
    )
  }
}
