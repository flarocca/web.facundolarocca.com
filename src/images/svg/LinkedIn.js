import React, { Component } from 'react';

export default class LinkedIn extends Component {
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
            <svg className={this.state.className} viewBox="0 0 512 512">
                <g>
                    <circle height="512" cx="256" cy="256" r="256" stroke="none" fill={this.state.outerColor} fillOpacity="1" fillRule="nonzero" width="512" x="0" y="0" />
                    <path d="m 157.927,120.303 c -18.884,0 -31.222,12.415 -31.222,28.687 0,15.93 11.963,28.687 30.491,28.687 h 0.357 c 19.245,0 31.224,-12.757 31.224,-28.687 -0.357,-16.272 -11.978,-28.687 -30.85,-28.687 z" fill={this.state.innerColor}>
                    </path>
                    <rect height="166.021" id="rect11" fill={this.state.innerColor} width="55.194" x="129.957" y="200.35699"/>
                    <path d="m 157.927,120.303 c -18.884,0 -31.222,12.415 -31.222,28.687 0,15.93 11.963,28.687 30.491,28.687 h 0.357 c 19.245,0 31.224,-12.757 31.224,-28.687 -0.357,-16.272 -11.978,-28.687 -30.85,-28.687 z" fill={this.state.innerColor}>
                    </path>
                    <path d="m 320.604,196.453 c -29.277,0 -42.391,16.101 -49.734,27.41 v -23.506 h -55.18 c 0.732,15.573 0,166.021 0,166.021 h 55.179 V 273.66 c 0,-4.963 0.357,-9.924 1.82,-13.471 3.982,-9.911 13.068,-20.178 28.313,-20.178 19.959,0 27.955,15.23 27.955,37.539 v 88.828 h 55.182 v -95.206 c 0,-50.996 -27.227,-74.719 -63.535,-74.719 z" fill={this.state.innerColor}>
                    </path>
                </g>
            </svg>
        );
    }
}