import React, { Component } from 'react';
import AppActions from '../../actions/AppActions';

export default class LanguageSelectorMobile extends Component {
  constructor(props) {
    super(props);

    this._changeLanguage = this._changeLanguage.bind(this);
    this.state = {
      languageSelected: this.props.initialLanguage
    }
  }

  render() {
    return (
      <div className="Container row fixed" style={{ zIndex: 1000, right: "0px", top: "20%" }}>
        <input type="checkbox" id="language-mobile" />
        <label id="languageLabel-mobile" htmlFor="language-mobile" style={{ background: "rgb(200, 200, 200)" }}>
          <b style={{ color: "white", position: "relative", top: "7px" }}>{this.state.languageSelected}</b>
        </label>
        <div className="right-mobile column jc-center" style={{ backgroundColor: "rgb(200, 200, 200)" }}>
          <div className="Container column jc-center" style={{ color: "dimgray", textAlign: "center", height: "30px" }}>
            <b>Language</b>
          </div>
          <div className="Container column" style={{marginBottom: "10%"}}>
            <div id="lanItem-mobile" style={{ alignSelf: "center" }}>
              <div className="lanItem-btn">
                <input onChange={() => this._changeLanguage('ARG')} type="radio" name="language" id="argLan" checked={this.state.languageSelected === "ARG"} />
                <label id="argLan-label" htmlFor="argLan">
                  <b style={{ position: "relative", marginTop: "10%" }}>ARG</b>
                </label>
              </div>
            </div>
            <div id="lanItem-mobile" style={{ alignSelf: "center" }}>
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