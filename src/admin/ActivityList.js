import React, { Component } from 'react';
import EditableRow from './EditableRow'
import { Table } from 'semantic-ui-react'


export default class ActivityList extends Component { 

  componentDidMount() {
    this.props.loadActivities().then((resp)=>{
    })
  }

  /*
  handleDelete = (uuid) => {
    return this.props.deleteActivity(uuid)
                    //onDelete={this.handleDelete}
  }
  */

  render() {
    const { activities } = this.props
    return (
      <div>
        <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Code</Table.HeaderCell>
            <Table.HeaderCell>Save</Table.HeaderCell>
            <Table.HeaderCell textAlign='right'>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
            <Table.Body>
              {Object.keys(activities).map(uuid => (
                  <EditableRow key={uuid}
                    collection='activities'
                    uuid={uuid}
                    updateEntity={this.props.updateEntity}
                    deleteActivity={this.props.deleteActivity}

                    values={{
                      name:activities[uuid].name,
                      code:activities[uuid].code
                    }}
                  />
              ))}
            </Table.Body>
        </Table>
      </div>
    )
  }
}
