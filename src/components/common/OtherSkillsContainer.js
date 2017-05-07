import React, { Component } from 'react'
import OtherSkill from './OtherSkill'

export default class OtherSkillsContainer extends Component {
  render () {
    return (
      <div className='Container row' style={{ marginLeft: '15px', flexWrap: 'wrap' }}>
        <OtherSkill color={this.props.color} text={'TDD'} />
        <OtherSkill color={this.props.color} text={'Scrum'} />
        <OtherSkill color={this.props.color} text={'MongoDB'} />
        <OtherSkill color={this.props.color} text={'ElasticSearch'} />
        <OtherSkill color={this.props.color} text={'Flux'} />
        <OtherSkill color={this.props.color} text={'.Net MVC 5'} />
        <OtherSkill color={this.props.color} text={'REST Services'} />
        <OtherSkill color={this.props.color} text={'SOA'} />
        <OtherSkill color={this.props.color} text={'OAuth'} />
        <OtherSkill color={this.props.color} text={'ExpressJS'} />
        <OtherSkill color={this.props.color} text={'Firebase'} />
        <OtherSkill color={this.props.color} text={'Redux'} />
        <OtherSkill color={this.props.color} text={'Azure Services'} />
      </div>
    )
  }
}
