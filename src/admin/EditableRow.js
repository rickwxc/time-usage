import React, { Component } from 'react';
import { Table, Icon } from 'semantic-ui-react'
import Info from './utils'
import CellInner  from './CellInner'

export default class EditableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      obj: {...this.props.obj},
      uiStatus:{
        save: {},
        remove: {} 
      },
      showInput: {}
    }
  }

  handleChange = (e, {name, value}) => {
    this.setState({
      obj: {
        ...this.state.obj,
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
    this.props.remove(this.props.resource, key).catch((err)=>{
      this.setUIStatus('remove', 'error', err.message)
    })
  }

  resetObject = () => {
    let obj = {}
    for(var key of Object.keys(this.state.obj)){
      obj[key] = ''
    }

    this.setState({
      obj: obj
    })
  }


  saveRow = (uuid) => {
    this.props.update(this.props.resource, uuid, this.state.obj)
    .then(() => {
      this.setUIStatus('save', 'positive', 'Done')
      this.hideInput()
    }).catch((err) => {
      this.setUIStatus('save', 'error', err.message)
    })
  }

  render(){
    const {obj, uiStatus} = this.state
    const {uuid, fields} = this.props
    return (
      <Table.Row >

        {fields.map((field) => (
          <Table.Cell key={field['name']} 
            onClick={() => this.showInput(field['name'])}>

            <CellInner 
              showInput={this.state.showInput[field['name']]} 
              onChange={this.handleChange} 
              name={field['name']} 
              value={obj[field['name']]} 
              fieldValue={field['value']}
            />
          
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
