import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

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

  componentWillReceiveProps(nextProps){
    if (this.props.options === nextProps.options){
      return
    }  

    this.setState({
      options: nextProps.options
    })
  }

  handleButtonClicked = (key) => {
    //make clicked button in primary style

    var newStatus = (this.state.mode === BUTTON_GROUP_MODE_MULTI)? this.state.status:{};

    newStatus[key] = newStatus[key]? null:{primary: true}

    this.setState({
      status: newStatus
    })

    this.props.handleButtonClicked(getSelectedKeys(this.state.options, newStatus))
  }

  render() {

    const { options } = this.state
    const { textField } = this.props

    return (
      <div>

  {Object.keys(options).map(key => (
    <Button 
    onClick={() => this.handleButtonClicked(key)}

    {...this.state.status[key]}

    size={this.props.size}
    key={key}
    content={options[key][textField]}
    />
  ))}

      </div>
    )
  }
}

function getSelectedKeys(options, status){
  return Object.keys(options).filter((key) => {
    return status[key]
  })

}
