import React, { Component } from 'react'
import { Button, Divider } from 'semantic-ui-react'

//TODO, can be improve: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md

export const BUTTON_GROUP_MODE_RADIO = 0;
export const BUTTON_GROUP_MODE_MULTI = 1;

export default class ButtonGroup extends Component {

  constructor(props) {
    super(props);
    const { options, mode } = this.props;

    this.state  = {
      status: {},
      mode: mode,
      options: options
    } 
  }

  handleButtonClicked = (key) => {
    //make clicked button in primary style

    var newStatus = (this.state.mode == BUTTON_GROUP_MODE_MULTI)? this.state.status:{};

    for(var st of this.state.options) {
      if(st.key == key){
        newStatus[st.key] = newStatus[st.key]? null:{primary: true}
        continue
      }
    }

    this.setState({
      status: newStatus
    })

    //call parent handler function 
    this.props.handleButtonClicked(getSelectedKeys(this.state.options, newStatus))
  }

  render() {

    return (
      <div>
  <Button.Group>

  {this.state.options.map(opt => (
    <Button 
    onClick={() => this.handleButtonClicked(opt.key)}

    {...this.state.status[opt.key]}


    key={opt.key}
    content={opt.text}
    />
  ))}

  </Button.Group>

      </div>
    )
  }
}

function getSelectedKeys(options, status){
  return options.filter((opt) => {
    if (status[opt.key]) {
      return opt.key
    }
  })
}
