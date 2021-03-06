import React from 'react';

const ActivityWrapper = (WrappedComponent) => {
  class HOC extends React.Component {

    render() {
      return (
        <div>
        <WrappedComponent
        resource='activities'
        fields = {[
          {
            name: 'name',
            value: null
          },
          {
            name: 'code',
            value: null
          },
          {
            name: 'type',
            value:['', 'skills', 'sports', 'funs', 'sleep', 'sicks'] 
          }
        ]}

        update={this.props.updateEntity}
        create={this.props.newEntity}
        remove={this.props.deleteEntity}
        list={this.props.activities}
        />
        </div>
      );
    }
  }

  return HOC; 
}

export default ActivityWrapper;
