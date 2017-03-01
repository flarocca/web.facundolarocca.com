import React, { Component } from 'react'

export default class Experience extends Component {
  render () {
    return (
      <div className='Container column'>
        <div className='Container row'>
          <div className='dot' style={{ backgroundColor: this.props.backgroundColor }} />
          <div style={{ position: 'relative' }}>
            <span className='resume-item' style={{ color: 'white', backgroundColor: this.props.backgroundColor }}><b>{this.props.period}</b></span>
          </div>
        </div>
        <div style={{ textAlign: 'left' }}>
          <h3>{this.props.title}</h3>
          <p style={{ color: this.props.fontColor }}>
            {this.props.description}
          </p>
        </div>
      </div>
    )
  }
}
