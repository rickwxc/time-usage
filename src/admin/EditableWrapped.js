import React from 'react';

const wrapped = (WrappedComponent) => {
  class HOC extends React.Component {

    componentDidMount() {
    }

    save = (key, data) => {
    }

    remove = (key) => {
    }

    render() {
      return (
        <WrappedComponent
        save={this.save}
        remove={this.remove}
        {...this.props}
        />
      );
    }
  }

  return HOC; 
}

export default wrapped;
