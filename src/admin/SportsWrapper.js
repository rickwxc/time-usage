import React from 'react';

const SportsWrapper = (WrappedComponent) => {
  class HOC extends React.Component {

    render() {
      return (
        <div>
        <WrappedComponent
        resource='sports'
        fields = {[
          {
            name: 'name',
            value: null
          }
        ]}

        update={this.props.updateEntity}
        create={this.props.newEntity}
        remove={this.props.deleteEntity}
        list={this.props.sports}
        />
        </div>
      );
    }
  }

  return HOC; 
}

export default SportsWrapper;
