import React, { Component } from 'react';
import EditableTable from './EditableTable'

//not used anymore
export default class ActivityList extends Component { 

  componentDidMount() {
    this.props.loadActivities()
    .then((resp)=>{
    })
    .catch((err)=>{

    })
  }

  render() {
    return (
      <div>
      <h2>
      Activities
      </h2>
      <EditableTable
        resource='activities'
        list={this.props.activities}
        update={this.props.updateEntity}
        remove={this.props.deleteActivity}
      />
      </div>
    )
  }
}
