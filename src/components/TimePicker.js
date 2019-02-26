import React from 'react';
import DatePicker from "react-datepicker";

export default function TimePicker (props) { 
  return <DatePicker
  selected={props.time}
  onChange={props.handleTimeChange}
  showTimeSelect
  showTimeSelectOnly
  timeIntervals={20}
  dateFormat="h:mm aa"
  timeCaption="Time"
  />

}
