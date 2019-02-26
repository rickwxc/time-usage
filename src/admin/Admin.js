import React, { Component } from 'react';
import ActivityForm from './ActivityForm';
import ActivityList from './ActivityList';

export default class Admin extends Component { 

  render() {
    return (
      <div>
        <br />
        <ActivityForm {...this.props} />
        <ActivityList {...this.props} />

      </div>
    )
  }
}

