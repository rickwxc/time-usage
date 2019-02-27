import React, { Component } from 'react';
//import Header from './components/layouts/header';
//import Footer from './components/layouts/footer';
import Admin from './admin/Admin';
import DayGrid from './components/DayGrid';
import { connect } from 'react-redux'
import fetch_days_started, { newActivity, loadActivities, updateEntity, deleteActivity } from './actions';
import { Container, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import "react-datepicker/dist/react-datepicker.css";


class App extends Component {

  render() {
    return (
      <div>

        {this.props.isLoading && (
          <div>
          Loading....
          </div>
        )}

        <Container>
        <Grid columns={1} stackable>
          <Grid.Column>
            <DayGrid 
              days={this.props.days} 
              OnFetchDays={this.props.fetch_days_started}
              OnUsageFormSubmit={this.props.fetch_days_started}
            />
          </Grid.Column>
          <Grid.Column>
            <Admin 
            activities={this.props.activities} 
            newActivity={this.props.newActivity}
            loadActivities={this.props.loadActivities}
            deleteActivity={this.props.deleteActivity}
            updateEntity={this.props.updateEntity}
            isLoading={this.props.isLoading}
            />
            <br /> <br /> <br /> <br />
            <br /> <br /> <br /> <br />

            <br /> <br /> <br /> <br />
          </Grid.Column>

        </Grid>
        </Container>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    days: state.days,
    activities: state.activities,
    isLoading: state.isLoading 
  }
}

const mapDispatchToProps = {
  fetch_days_started,
  newActivity,
  deleteActivity,
  updateEntity,
  loadActivities,
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
