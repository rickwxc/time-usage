import React from 'react';

const SkillWrapper = (WrappedComponent) => {
  class HOC extends React.Component {

    render() {
      return (
        <WrappedComponent
          resource='skills'
          fields = {[
            {
              name: 'name',
              value: null
            },
            {
              name: 'code',
              value: null
            }
          ]}

          remove={this.props.deleteEntity}
          update={this.props.updateEntity}
          create={this.props.newEntity}
          list={this.props.skills}
        />
      );
    }
  }

  return HOC; 
}

export default SkillWrapper;
