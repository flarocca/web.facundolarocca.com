import React, { Component } from 'react';
import '../css/Experience-section.css';
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
//<a href="#"><em>{this.state.languageSet.VIEW_MORE}</em></a>

  render() {
    return (
      <div className="App-experience">
        <Element name="EXPERIENCE" />
        <div className="Experience-Detail-Title">
          <p>{this.state.languageSet.EXPERIENCE}</p>
          <hr />
          <div className="Experience-Detail-List">
            <div className="Experience-Detail-List-Item">
              <h2>{this.state.languageSet.PROFESSIONAL}</h2>
              {this.state.languageSet.PROF_DESC}
              <Link to="/experience/professional"><em>{this.state.languageSet.VIEW_MORE}</em></Link>
            </div>
            <div className="Experience-Detail-List-Item">
              <h2>{this.state.languageSet.PERSONAL}</h2>
              {this.state.languageSet.PER_DESC}
              <Link to="/experience/personal"><em>{this.state.languageSet.VIEW_MORE}</em></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}