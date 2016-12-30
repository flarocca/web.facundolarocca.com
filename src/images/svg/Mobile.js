import React, { Component } from 'react';

export default class Mobile extends Component {
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
            <svg className={this.props.className} viewBox="0 0 128 128" >
                <g>
                    <circle cx="64" cy="64" fill={this.state.outerColor} r="64" />
                    <path d="M81,17.5H47c-3.038,0-5.5,2.462-5.5,5.5v82c0,3.038,2.462,5.5,5.5,5.5h34c3.038,0,5.5-2.462,5.5-5.5V23     C86.5,19.962,84.038,17.5,81,17.5z M59.911,22.524h8c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5h-8     c-0.276,0-0.5-0.224-0.5-0.5S59.635,22.524,59.911,22.524z M56.833,22.009c0.551,0,1,0.448,1,1s-0.449,1-1,1s-1-0.448-1-1     S56.282,22.009,56.833,22.009z M64,107.967c-1.933,0-3.5-1.567-3.5-3.5c0-1.933,1.567-3.5,3.5-3.5c1.933,0,3.5,1.567,3.5,3.5     C67.5,106.4,65.933,107.967,64,107.967z M84,99.009H44v-70h40V99.009z" fill={this.state.innerColor} />
                </g>
            </svg>
        );
    }
}