import React, { Component } from 'react';

export default class ResumeOtherSkill extends Component {
  render() {
    return (
      <span
        className="resume-item skill"
        style={{ fontSize: "small", color: "white", backgroundColor: this.props.color }}>{this.props.text}</span>
    );
  }
}