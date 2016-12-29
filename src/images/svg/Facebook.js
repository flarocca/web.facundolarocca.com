import React, { Component } from 'react';

export default class Facebook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            outerColor: this.props.outerColor ? this.props.outerColor : '#515151',
            innerColor: this.props.innerColor ? this.props.innerColor : '#ffffff',
            className: this.props.className ? this.props.className : "",
        }
    }

    render() {
        return (
            <svg className={this.state.className} viewBox="0 0 32 32">
                <path d="M18,32V18h6l1-6h-7V9c0-2,1.002-3,3-3h3V0c-1,0-3.24,0-5,0c-5,0-7,3-7,8v4H6v6h6v14H18z" fill={this.state.innerColor} />
            </svg>
        );
    }
}