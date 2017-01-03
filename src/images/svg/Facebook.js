import React, { Component } from 'react';

export default class Facebook extends Component {
    render() {
        return (
            <svg className={this.props.className} viewBox="0 0 32 32">
                <path d="M18,32V18h6l1-6h-7V9c0-2,1.002-3,3-3h3V0c-1,0-3.24,0-5,0c-5,0-7,3-7,8v4H6v6h6v14H18z" fill={this.props.innerColor} />
            </svg>
        );
    }
}