import React, { Component } from 'react';

export default class Skill extends Component {
  render() {
    return (
      <div>
        <div className="Container row">
          <div className="dot" style={{ backgroundColor: this.props.color }} />
          <div style={{ position: "relative" }}>
            <span className="resume-item" style={{ paddingLeft: "3px", paddingBottom: "6px", textAlign: "left", color: this.props.color }}><b>{this.props.text}</b></span>
          </div>
        </div>
        {this._renderSkillPoints(this.props.points, this.props.color)}
      </div>
    );
  }

  _renderSkillPoints(points, color) {
    var renderedPoints = [];

    for (let i = 0; i < points; i++) {
      renderedPoints.push(<div key={i} className="dot-skill" style={{ backgroundColor: color }} />);
    }

    for (let i = points; i < 10; i++) {
      renderedPoints.push(<div key={i} className="dot-skill" style={{ backgroundColor: "#B4B2B2" }} />);
    }

    return (
      <div className="Container row" style={{ marginBottom: "20px" }}>
        {renderedPoints}
      </div>
    );
  }
}