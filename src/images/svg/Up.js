import React, { Component } from 'react';

export default class Up extends Component {
    render() {
        return (
            <svg className={this.props.className} viewBox="0 0 99.999995 99.999995">
                <g transform="translate(0,-99.999988)">
                    <path d="M 20 0 C 8.9199935 0 0 8.9199935 0 20 L 0 80 C 0 91.080005 8.9199935 100 20 100 L 80 100 C 91.080005 100 100 91.080005 100 80 L 100 20 C 100 8.9199935 91.080005 0 80 0 L 20 0 z M 50.091797 12.806641 L 76.353516 38.027344 C 77.205446 38.870954 76.914751 40.605074 76.275391 40.746094 L 64.447266 40.730469 L 64.433594 71.550781 C 64.251424 73.505371 62.420636 74.659589 60.853516 74.730469 L 39.009766 74.699219 C 38.242966 74.732019 35.896786 73.921469 35.634766 71.605469 L 35.634766 40.736328 L 23.929688 40.736328 C 23.257527 40.515358 22.500917 39.392981 23.929688 37.863281 L 50.091797 12.806641 z M 25.722656 82.671875 L 74.277344 82.671875 C 75.693699 82.671875 76.833984 83.81216 76.833984 85.228516 L 76.833984 87.458984 C 76.833984 88.87534 75.693699 90.015625 74.277344 90.015625 L 25.722656 90.015625 C 24.306301 90.015625 23.166016 88.87534 23.166016 87.458984 L 23.166016 85.228516 C 23.166016 83.81216 24.306301 82.671875 25.722656 82.671875 z " fill={this.props.outerColor} transform="translate(0,99.999988)" />
                </g>
            </svg>
        );
    }
}