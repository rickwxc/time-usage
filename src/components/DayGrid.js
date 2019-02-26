import React, { Component } from 'react';

import { Button } from 'semantic-ui-react'
import Day from './Day';
import UsageForm from './UsageForm';


//const DayGrid = (props) => {
class DayGrid extends Component { 

  render() {
    const { days } = this.props;

    return (
      <div>
      <br />
      <br />
      <br />
      <br />
      <UsageForm
			OnUsageFormSubmit={this.props.OnUsageFormSubmit}
      />
      <br />
      <br />
      <br />
      <br />


        <Button onClick={this.props.OnFetchDays}>Load</Button>

        {days.map(day => (
          <div key={day.date}>

          <Day 
          date={day.date} 
          dayClicked={this.props.OnFetchDays}
          />

          </div>
        ))}

      </div>
    )
  }
}

export default DayGrid;
