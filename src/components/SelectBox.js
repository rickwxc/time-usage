t import React from 'react'
import { Select } from 'semantic-ui-react'

export default function SelectBox (props) { 
  return  <Select placeholder='-- Select --' options={props.options} />
}
