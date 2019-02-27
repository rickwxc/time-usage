import React, { Component } from 'react';
import Admin from './admin/Admin';
import UsageForm from './components/UsageForm';
import { connect } from 'react-redux'
import { 
  loadEntities, 
  newEntity, 
  deleteEntity,
  updateEntity 
} from './actions';
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
          <UsageForm
          OnUsageFormSubmit={this.props.OnUsageFormSubmit}
          />
          </Grid.Column>
          <Grid.Column>
            <Admin 
            activities={this.props.activities} 
            skills={this.props.skills} 

            loadEntities={this.props.loadEntities}
            newEntity={this.props.newEntity}
            deleteEntity={this.props.deleteEntity}
            updateEntity={this.props.updateEntity}

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
    skills: state.skills
  }
}

const mapDispatchToProps = {
  newEntity,
  updateEntity,
  deleteEntity,
  loadEntities
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
