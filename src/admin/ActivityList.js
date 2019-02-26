import React, { Component } from 'react';

export default class ActivityList extends Component { 

  componentDidMount() {
    this.props.loadActivities()
  }

  render() {
    return (
      <div>
        <hr />
        {this.props.activities.map(act => (
          <div key={act.key}>
            {act.text}
          </div>
        ))}

      </div>
    )
  }
}
