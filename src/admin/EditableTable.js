import React, { Component } from 'react';
import EditableRow from './EditableRow'
import CreateRow from './CreateRow'
import { Table } from 'semantic-ui-react'

export default class EditableTable extends Component { 

    constructor(props) {
      super(props)
      this.state = {
        isLoading: true,
        err: null
      }
    }

    componentDidMount() {
      this.props.loadList(this.props.resource)
      .then((resp)=>{
        this.setState({ isLoading: false })
      }).catch((err)=>{
        this.setState({
          isLoading: false,
          err: err.message
        })
      })
    }

  render() {
    const { list, resource, fields } = this.props
    return (
      <div>

      {this.state.isLoading && (
      <div>
        Loading....
      </div>
      )}

      {this.state.err && (
      <div>
        {this.state.err}
      </div>
      )}

      {!this.state.isLoading && !this.state.err && (
        <Table celled>
        <Table.Header>
          <Table.Row>
          {fields.map((field) =>
            <Table.HeaderCell key={field.name}>
            {field.name}
            </Table.HeaderCell>
          )}
            <Table.HeaderCell>Save</Table.HeaderCell>
            <Table.HeaderCell textAlign='right'>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
            <Table.Body>
              {Object.keys(list).map(uuid => 
                  <EditableRow key={uuid}
                    resource={resource}
                    uuid={uuid}
                    fields={fields}
                    update={this.props.update}
                    remove={this.props.remove}
                    obj={list[uuid]}
                  />
              )}
            </Table.Body>
            <Table.Footer fullWidth>

            <CreateRow 
                resource={resource}
                fields={fields}
                create={this.props.create}
            />

            </Table.Footer>
        </Table>
      )}
      </div>
    )
  }
}
