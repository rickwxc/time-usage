import React from 'react';

const SkillWrapper = (WrappedComponent) => {
  class HOC extends React.Component {

    render() {
      return (
        <WrappedComponent
          resource='skills'

          remove={this.props.deleteEntity}
          fields={this.props.fields}
          update={this.props.updateEntity}
          create={this.props.newEntity}

          list={this.props.skills}
          loadList={this.props.loadEntities}
        />
      );
    }
  }

  return HOC; 
}

export default SkillWrapper;
