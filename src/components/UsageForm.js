import React, { Component } from 'react';
import { Form, Divider } from 'semantic-ui-react'
//import DateTimeInput from './DateTimeInput'
import DateOnlyPicker from "./DatePicker";
//import SelectBox from "./SelectBox";
import TimePicker from "./TimePicker";
import ButtonGroup, { BUTTON_GROUP_MODE_RADIO, BUTTON_GROUP_MODE_MULTI } from "./ButtonGroup";


const skills = [
  { key: 'react',  text: 'React' },
  { key: 'nodejs',  text: 'Node.js' },
  { key: 'php',  text: 'Php' },
  { key: 'ruby',  text: 'Ruby' },
  { key: 'mysql',  text: 'mysql' },
  { key: 'mongodb',  text: 'MongoDB' },
  { key: 'js',  text: 'Javascript' }
]


const activities = [
  { key: 'coding',  text: 'Coding', state: {showSkills: true} },
  { key: 'reading', text: 'Reading', state: { showSkills: true} },
  { key: 'sport',  text: 'Sport', state: { showSkills: false} },
  { key: 'relax',  text: 'Relax', state: { showSkills: false} },
]


export default class UsageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', 
      email: '', 
      activity: '', 
      showSkills: false,
      showRelax: false,
      showSport: false,
      date: null
    };
  }

  handleDateChange = (date) => {
    this.setState({ date: date })
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })


  submenuClicked = (val) =>{
    //console.log(val);
  }

  activityClicked = (val) =>{
    const sel = val[0];
    this.setState({
      activity: sel
    })

    activities.filter((act) =>{
      if(act.key == sel.key){
        this.setState(act.state)
      }
    })
  }

  handleSubmit = () => {
    /*
    //console.log(this.state.name);
    //this.setState({ email: '', name: '' })
    this.props.OnUsageFormSubmit({
      name: 'reading',
    })
    */
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
      <h2>
      Time Usage Form
      </h2>

      <h3>
      Date
      </h3>
      <DateOnlyPicker 
      date={this.state.date} 
      handleDateChange={this.handleDateChange}
      />
      <Divider />
<TimePicker />

      <ButtonGroup 
      mode={BUTTON_GROUP_MODE_RADIO}
      handleButtonClicked={this.activityClicked} 
      options={activities} />

      {this.state.showSkills && (<ButtonGroup 
        mode={BUTTON_GROUP_MODE_MULTI}
        handleButtonClicked={this.submenuClicked} 
        options={skills} />
      )}

      <br />
      <br />
      <br />
      <br />


      <Form.Group>
      <Form.Button content='Submit' />
      </Form.Group>
      </Form>
    )
  }
}
