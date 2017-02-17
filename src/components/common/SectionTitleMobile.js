import React, { Component } from 'react';

export default class SectionTitleMobile extends Component {
    render() {
        return (
            <span style={{ textAlign: "left", fontSize: "20px", color: this.props.color }}>
                <b id={this.props.id + "-title-mobile"}>{this.props.title}</b>
                <hr />
            </span>
        );
    }
}