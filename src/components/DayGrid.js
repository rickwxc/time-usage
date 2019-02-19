import React, { Component } from 'react';
import Day from './Day';

//const DayGrid = (props) => {
class DayGrid extends Component { 

  render() {
    const { days } = this.props;

    return (
      <div>
        <button type="submit" onClick={this.props.OnFetchDays}
        > Save </button>

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
