import React from 'react';

const ActivityWrapper = (WrappedComponent) => {
  class HOC extends React.Component {

    render() {
      return (
        <div>
        <WrappedComponent
        resource='activities'
        fields={this.props.fields}
        update={this.props.updateEntity}
        create={this.props.newEntity}

        remove={this.props.deleteEntity}

        list={this.props.activities}
        loadList={this.props.loadEntities}
        />
        </div>
      );
    }
  }

  return HOC; 
}

export default ActivityWrapper;
