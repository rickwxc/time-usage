import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react'

import EditableTable from './EditableTable'
import ActivityWrapper from './ActivityWrapper';
import SkillWrapper from './SkillWrapper';

const WrappedActivity = ActivityWrapper(EditableTable);
const WrappedSkill = SkillWrapper(EditableTable);

export default class Admin extends Component { 

  render() {
  /*
        name:'Sports',
        resource:'sports',
        name: 'Fun',
        resource:'fun',
        name: 'Sleep',
        resource:'sleep',
    */


    return (
      <div>

        <h2>
        Activities
        </h2>
        <WrappedActivity 

        {...this.props} 
        fields = {[
          {
            name: 'name',
            value: null
          },
          {
            name: 'code',
            value: null
          },
          {
            name: 'type',
            value:['', 'skills', 'sports', 'fun', 'sleep'] 
          }
        ]}
        />
        <Divider />

        <h2>
        Skills
        </h2>
        <WrappedSkill

        {...this.props} 
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
        />

      </div>
    )
  }
}
