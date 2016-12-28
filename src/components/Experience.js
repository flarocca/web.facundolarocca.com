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
      <div style={styles.container}>
        <Element name="EXPERIENCE" />
        <div>
          <p className="Section-title">{this.state.languageSet.EXPERIENCE}</p>
          <hr />
          <div style={styles.detailList}>
            <div style={styles.detailListItem}>
              <h2>{this.state.languageSet.PROFESSIONAL}</h2>
              {this.state.languageSet.PROF_DESC}
              <span className="Experience-Detail-More"><Link to="/experience/professional">{this.state.languageSet.VIEW_MORE}</Link></span>
            </div>
            <div style={styles.detailListItem}>
              <h2>{this.state.languageSet.PERSONAL}</h2>
              {this.state.languageSet.PER_DESC}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

var styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "rgba(200,191,231,1)"
  },
  detailList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "5%",
    marginBottom: "5%"
  },
  detailListItem: {
    fontSize: "medium",
    color: "white",
    marginLeft: "5%",
    marginRight: "5%",
    width: "30%"
  }
}