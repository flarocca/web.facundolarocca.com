import React, { Component } from 'react'

export default class SendButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} type='button' className='jc-center button' style={{ alignSelf: 'flex-end', color: 'white', width: '40%', backgroundColor: this.props.backgroundColor }}>
        {this.props.children}
        <span>{this.props.text}</span>
      </button>
    )
  }
}
