import React, { Component } from 'react';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import DayGrid from './components/DayGrid';
import { connect } from 'react-redux'
import fetch_days_started from './actions';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        {this.props.isLoading && (
          <div>
          Loading....
          </div>
        )}

        <DayGrid 
        days={this.props.days} 
        OnFetchDays={this.props.fetch_days_started}
        />

        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    days: state.days,
    isLoading: state.isLoading 
  }
}

const mapDispatchToProps = { fetch_days_started }

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
