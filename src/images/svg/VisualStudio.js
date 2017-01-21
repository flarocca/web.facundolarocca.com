import React, { Component } from 'react';

export default class VisualStudio extends Component {
    render() {
        return (
            <svg className={this.props.className} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)">
                    <path fill={this.props.innerColor} d="M1389 1984 l-466 -466 -298 233 -298 233 -116 -60 -116 -59 0 -590 0-590 115 -59 116 -59 297 231 c164 128 301 232 305 232 4 0 216 -209 470 -465 255 -256 466 -465 471 -465 5 0 136 51 292 114 l284 113 0 949 0 948 -280 113 c-154 61 -287 112 -295 113 -8 0 -225 -210 -481 -466z m481 -710 c0 -314 -3-484 -10 -482 -21 7 -619 474 -619 483 0 10 608 485 622 485 4 0 7 -219 7-486z m-1190 3 c0 -14 -335 -347 -348 -347 -9 0 -12 86 -12 343 0 189 3 347 7 351 7 7 353 -333 353 -347z" />
                </g>
            </svg>
        );
    }
}