import React from 'react';
import DatePicker from "react-datepicker";

export default function DateOnlyPicker (props) {
  return <DatePicker
      selected={props.date}
      onChange={props.handleDateChange}
      />
}
