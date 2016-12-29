import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import ImageProvider from '../services/ImageProvider';
import { Link } from 'react-router'

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this._imageProvider = new ImageProvider();
    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this.state = {
      languageSet: this.props.languageSet
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  _onAppSessionChange() {
    this.setState({ languageSet: AppStore.getLanguageSet() });
    var menu = AppStore.getMenuSelected();
    if (menu === 'EXPERIENCE') {
      scroller.scrollTo(menu, {
        duration: 1000,
        delay: 0,
        smooth: true,
        offset: -40
      });
    }
  }

  render() {
    return (
      <div className="Container column">
        <Element name="EXPERIENCE" />
        <div>
          <h1 style={{ color: "rgba(76, 165, 208, 1)" }}>{this.state.languageSet.EXPERIENCE}</h1>
          <hr />
          <div className="Container row jc-center detail-list">
            <div className="detail-list-item" style={{ color: "rgba(76, 165, 208, 1)" }}>
              <h2 style={{ color: "rgba(76, 165, 208, 1)" }}>{this.state.languageSet.PROFESSIONAL}</h2>
              <p className="text" style={{ color: "dimgray" }}>
                I Actually work as Fullstack .NET Engineer III for Web.com, <br />
                a company with a strong position in the North American eCommerce market. <br />
                Maintenance and new software requirements both back-end and front-end <br />
                of the ticketing web portal of the company. <br />
              </p>
              <span className="container column jc-center button"><Link className="link-btn" style={{ color: "white" }} to="/experience/professional">{this.state.languageSet.VIEW_MORE}</Link></span>
            </div>
            <div className="detail-list-item" style={{ color: "rgba(76, 165, 208, 1)" }}>
              <h2 style={{ color: "rgba(76, 165, 208, 1)" }}>{this.state.languageSet.PERSONAL}</h2>
              <p className="text" style={{ color: "dimgray" }}>
                Web and mobile applications development using <em>NodeJS</em>, <em>ReactJS</em>, <em>ReactNative</em> <br />
                and non-relational databases such as <em>ElasticSearch</em> and <em>MongoDB</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}