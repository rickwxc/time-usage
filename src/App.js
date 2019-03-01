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

  constructor(props) {
    super(props);
    this.state = {
      errors: [], 
    };
  }

  componentDidMount() {
    this.props.loadEntities('activities')
    .then((resp)=>{
    }).catch((err)=>{
      this.setState({
        errors:[...this.state.errors, 'Activities loading failed.']
      })

    })
    this.props.loadEntities('skills')
    .then((resp)=>{
    }).catch((err)=>{
      this.setState({
        errors: [...this.state.errors, 'Skills loading failed.']
      })
    })

    this.props.loadEntities('sports')
    .then((resp)=>{
    }).catch((err)=>{
      this.setState({
        errors: [...this.state.errors, 'Sports loading failed.']
      })
    })
  }


  render() {
    const { errors } = this.state
    return (
      <div>
        <Container>
        <Grid columns={1} stackable>
          <Grid.Column>
          <UsageForm
          OnUsageFormSubmit={this.props.OnUsageFormSubmit}
          activities={this.props.activities} 
          skills={this.props.skills} 
          sports={this.props.sports} 
          funs={this.props.funs} 
          sicks={this.props.sicks} 
          sleep={this.props.sleep} 
          loadEntities={this.props.loadEntities}

          />
          </Grid.Column>
          <Grid.Column>
          
          {errors.length !== 0 && (
            <div>
            {errors.map(msg => (
              <div key={msg}>
              {msg}
              </div>
            ))}
            </div>
          )}

          {errors.length === 0 && (
            <Admin 
            activities={this.props.activities} 
            skills={this.props.skills} 
            sports={this.props.sports} 
            funs={this.props.funs} 
            sicks={this.props.sicks} 
            sleep={this.props.sleep} 

            newEntity={this.props.newEntity}
            deleteEntity={this.props.deleteEntity}
            updateEntity={this.props.updateEntity}
            />
          )}
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
    sports: state.sports,
    funs: state.funs,
    sleep: state.sleep,
    sicks: state.sicks,
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
