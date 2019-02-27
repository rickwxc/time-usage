import React, { Component } from 'react';
import { Table, Icon, Button } from 'semantic-ui-react'
import Info from './utils'
import CellInner  from './CellInner'

export default class CreateRow extends Component {
  constructor(props) {
    super(props)

    let obj = {}
    for(var field of this.props.fields){
      obj[field.name] = ''
    }

    this.state = {
      emptyObj: {...obj},
      obj: obj,
      uiStatus: {
        save: {}
      }
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
      save: {}
    }
  })

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

  resetObject = () => {
    this.setState({
      obj: {...this.state.emptyObj}
    })
  }

  saveRow = () => {
    this.props.create(this.props.resource, this.state.obj)
    .then(() =>{
      this.resetObject()
      this.setUIStatus('save', 'positive', 'Done')
    }).catch((err) => {
      this.setUIStatus('save', 'error', err.message)
    })
  }

  render(){
    const {obj, uiStatus} = this.state
    const {fields} = this.props
    return (
      <Table.Row >

        {fields.map((field) => (
          <Table.HeaderCell key={field['name']} >

          <CellInner 
            showInput='true'
            onChange={this.handleChange} 
            name={field['name']} 
            value={obj[field['name']]} 
            fieldValue={field['value']}
          />
          
          </Table.HeaderCell>
        ))}

        <Table.HeaderCell {...uiStatus.save.status}
            onClick={() => this.saveRow()}
            textAlign='center'
            colSpan='2' >

            <Button fluid icon labelPosition='left' primary size='small'>
              <Icon name='save' /> Add 
            </Button>

            {uiStatus.save.message && (
              <div>
                {Info({msg: uiStatus.save.message})}
              </div>
            )}

        </Table.HeaderCell>

      </Table.Row>
    )
  }
}
