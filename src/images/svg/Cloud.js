import React, { Component } from 'react';

export default class Cloud extends Component {
    render() {
        return (
            <svg className={this.props.className} viewBox="0 0 64 64">
                <g>
                    <circle cx="32" cy="32" r="32" fill={this.props.outerColor}/>
                    <path fill={this.props.innerColor} d="M48,30c0-8.837-7.163-16-16-16c-7.498,0-13.773,5.165-15.508,12.126C11.687,26.854,8,30.991,8,36    c0,5.523,4.477,10,10,10h30c4.418,0,8-3.582,8-8S52.418,30,48,30z"/>
                </g>
            </svg>
        );
    }
}