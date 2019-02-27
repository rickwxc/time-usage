import React from 'react';
import { Select, Input } from 'semantic-ui-react'
import {valueToSelectOption}  from './utils'

export default function CellInner(props) {
  return <div>

  {!props.showInput && (
    <span>
    {props.value}
    </span>
  )}

  {props.showInput && (
    <div>

      {!props.fieldValue && (
        <Input
        onChange={props.onChange} 
        fluid 
        name={props.name} 
        value={props.value} 
        />
      )}

      {props.fieldValue && (
        <Select
        onChange={props.onChange} 
        name={props.name} 
        value={props.value} 
        placeholder='-- select --' 
        options={valueToSelectOption(props.fieldValue)} />
      )}
    </div>
  )}
  </div>
}
