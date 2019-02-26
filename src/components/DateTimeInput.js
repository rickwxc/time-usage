import React from 'react';

export default function DateTimeInput (props) {
  return <div>
    <h3>Input</h3>
    <div className="ui calendar" id="example1">
      <div className="ui input left icon">
        <i className="calendar icon"></i>
        <input type="text" placeholder="Date/Time" />
      </div>
    </div>

  </div> ;
}
