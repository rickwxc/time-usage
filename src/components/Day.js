import React from 'react';

const Day = props => { 

	return (
    <div onClick={props.dayClicked}>
    {props.date}
    </div>
  )

}

export default Day;
