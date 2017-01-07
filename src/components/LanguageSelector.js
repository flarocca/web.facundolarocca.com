import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import Setting from '../images/svg/Setting';

export default class LanguageSelector extends Component {
  constructor(props) {
    super(props);

    this._changeLanguage = this._changeLanguage.bind(this);
    this.state = {
      languageSelected: this.props.initialLanguage
    }
  }

  render() {
    return (
      <div className="Container row fixed main" style={{ right: "0px", top: "20%" }}>
        <input type="checkbox" id="language" />
        <label id="languageLabel" htmlFor="language" style={{ background: "rgb(200, 200, 200)" }}>
          <b style={{ color: "white", position: "relative", top: "12px" }}>{this.state.languageSelected}</b>
        </label>
        <div className="right column jc-center" style={{ backgroundColor: "rgb(200, 200, 200)" }}>
          <div className="Container column jc-center" style={{ color: "dimgray", textAlign: "center", height: "30px" }}>
            <b>Language Selector</b>
          </div>
          <div className="Container row" style={{ height: "80px", marginRight: "10%", marginLeft: "10%" }}>
            <div id="lanItem" style={{ marginRight: "10%" }}>
              <div className="lanItem-btn">
                <input onChange={() => this._changeLanguage('ARG')} type="radio" name="language" id="argLan" checked={this.state.languageSelected === "ARG"} />
                <label id="argLan-label" htmlFor="argLan">
                  <b style={{ position: "relative", marginTop: "10%" }}>ARG</b>
                </label>
              </div>
            </div>
            <div id="lanItem" style={{ marginLeft: "10%" }}>
              <div className="lanItem-btn">
                <input onChange={() => this._changeLanguage('ENG')} type="radio" name="language" id="engLan" checked={this.state.languageSelected === "ENG"} />
                <label id="engLan-label" htmlFor="engLan">
                  <b style={{ position: "relative", marginTop: "10%" }}>ENG</b>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _changeLanguage(language) {
    this.setState({ languageSelected: language }, () => {
      AppActions.languageChanged(language);
    });
  }
}