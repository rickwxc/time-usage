import React, { Component } from 'react';
import { Form, Divider } from 'semantic-ui-react'
import DateOnlyPicker from "./DatePicker";
import TimePicker from "./TimePicker";
import ButtonGroup, { BUTTON_GROUP_MODE_RADIO, BUTTON_GROUP_MODE_MULTI } from "./ButtonGroup";

export default class UsageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: false, 
      showSubmenu: null, 
      showSkills: false,//tobe del

      date: null
    };
  }

  handleDateChange = (date) => {
    this.setState({ date: date })
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })


  submenuClicked = (val) =>{
  //TODO FIXME
    //console.log(val);
  }

  activityClicked = (val) =>{
    let selectedAct = this.props.activities[val[0]]

    this.setState({
      showSubmenu: selectedAct.type
    })

    /*
    for(var act of activities){
      if(act.key === sel.key){
        this.setState(act.state)
      }
    }
    */
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
    const {showSubmenu} = this.state
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
      options={this.props.activities} 
      size='large'
      textField='name'
      {...this.props}
      
      />
      <Divider />

      {showSubmenu === 'skills' && (<ButtonGroup 
        mode={BUTTON_GROUP_MODE_MULTI}
        size='small'
        handleButtonClicked={this.submenuClicked} 
        textField='name'
        options={this.props.skills} />
      )}

      {showSubmenu === 'sports' && (<ButtonGroup 
        mode={BUTTON_GROUP_MODE_MULTI}
        size='small'
        handleButtonClicked={this.submenuClicked} 
        textField='name'
        options={this.props.sports} />
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
