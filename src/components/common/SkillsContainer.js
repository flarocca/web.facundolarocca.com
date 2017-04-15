import React, { Component } from 'react'
import Skill from './Skill'

export default class SkillsContainer extends Component {
  render () {
    return (
      <div className='Container column'>
        <Skill color={this.props.color} points={9} text={'C#'} />
        <Skill color={this.props.color} points={7} text={'JavaScript'} />
        <Skill color={this.props.color} points={7} text={'ReactJS / React-Native'} />
        <Skill color={this.props.color} points={6} text={'NodeJS'} />
        <Skill color={this.props.color} points={8} text={'CSS / HTML'} />
        <Skill color={this.props.color} points={7} text={'SQL Server'} />
        <Skill color={this.props.color} points={7} text={'ORACLE'} />
        <Skill color={this.props.color} points={8} text={'MicroServices'} />
      </div>
    )
  }
}
