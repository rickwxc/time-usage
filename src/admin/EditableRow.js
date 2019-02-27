import React, { Component } from 'react';
import { Input, Table, Icon} from 'semantic-ui-react'

export default class EditableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyVal:{...this.props.values},
      uiStatus:{
        save: {},
        remove: {} 
      },
      showInput: {}
    }
    //TODO here
    for(const key in this.props.values){
      console.log(key)
    }
  }

  handleChange = (e, {name, value}) => {
    this.setState({
      keyVal: {
        ...this.state.keyVal,
        [name] : value
      }
    })
  }

  resetUIStatus = () => this.setState({
    uiStatus:{
      save: {},
      remove: {} 
    }
  })

  showInput = (key) => {
    this.resetUIStatus()
    this.setState({
      showInput: {
        ...this.state.showInput,
        [key]: true 
      }
    })
  }

  hideInput = () => {
    this.setState({
      showInput: {}
    })
  }

  setUIStatus = (action, status, message) => {
    this.setState({
      uiStatus: {
        ...this.state.uiStatus,
        [action]: {
          status: {[status]: true},
          message: message
        }
      }
    })
  }

  deleteRow = (key) => {
    this.props.deleteActivity(key).catch((err)=>{
      this.setUIStatus('remove', 'error', err.message)
    })
  }

  saveRow = (uuid) => {
    this.props.updateEntity(this.props.collection, uuid, this.state.keyVal)
    .then(() => {
      this.setUIStatus('save', 'positive', 'Done')
      this.hideInput()
    }).catch((err) => {
      this.setUIStatus('save', 'error', err.message)
    })
  }
    
  render(){
    const {keyVal, uiStatus} = this.state
    const {uuid} = this.props
    return (
      <Table.Row >
        {Object.keys(keyVal).map((key) => (
          <Table.Cell key={key} onClick={() => this.showInput(key)}>

          {!this.state.showInput[key] && (
            <span>
              {keyVal[key]}
            </span>
          )}

          {this.state.showInput[key] && (
          <Input 
          onChange={this.handleChange} 
            fluid name={key} value={keyVal[key]} />
          )}
          
          </Table.Cell>
        ))}
        <Table.Cell {...uiStatus.save.status}
            onClick={() => this.saveRow(uuid)}
        >
          <Icon name='save' />

          {uiStatus.save.message && (
            <div>
              {Info({msg: uiStatus.save.message})}
            </div>
          )}

        </Table.Cell>

        <Table.Cell {...uiStatus.remove.status} textAlign='right'> 
          <Icon name='close'
            onClick={() => this.deleteRow(uuid)}
          />


          {uiStatus.remove.message && (
            <div>
              {Info({msg: uiStatus.remove.message})}
            </div>
          )}

        </Table.Cell>
      </Table.Row>
    )
  }
}

function Info ({ msg }) {
  return <div>
  {msg}
  </div>
}
