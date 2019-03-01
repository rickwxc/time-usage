import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react'

import EditableTable from './EditableTable'
import ActivityWrapper from './ActivityWrapper';
import SkillWrapper from './SkillWrapper';
import SportsWrapper from './SportsWrapper';


const WrappedActivity = ActivityWrapper(EditableTable);
const WrappedSkill = SkillWrapper(EditableTable);
const WrappedSport = SportsWrapper(EditableTable);


export default class Admin extends Component { 

  render() {
    /*
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
        <WrappedActivity {...this.props} />
        <Divider />

        <h2>
        Skills
        </h2>
        <WrappedSkill {...this.props} />

        <h2>
        Sports
        </h2>

        <WrappedSport {...this.props} />

      </div>
    )
  }
}
