import React, { Component } from 'react';
import Setting from '../images/svg/Setting';
import AppActions from '../actions/AppActions';
import ThemeManager from '../services/ThemeManager';
import LIGHT_BLUE_THEME from '../constants/themes/LIGHT_BLUE_THEME';
import LIGHT_RED_THEME from '../constants/themes/LIGHT_RED_THEME';

export default class ThemeSelector extends Component {
  constructor(props) {
    super(props);

    this._allThemes = [];

    this._renderMainThemes = this._renderMainThemes.bind(this);
    this._onThemeSelected = this._onThemeSelected.bind(this);

    this.state = {
      backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'dimgray',
      mainColor: this.props.mainColor ? this.props.mainColor : 'dimgray',
      innerColor: this.props.innerColor ? this.props.innerColor : 'dimgray',
      textColor: this.props.textColor ? this.props.textColor : 'black',
    }
  }

  componentDidMount() {
    
  }

  _onThemeSelected(themeName) {
    AppActions.themeSelected(themeName);
  }

  _renderMainThemes() {
    return (
      <div className="Container row" style={{ height: "80px", marginRight: "10%", marginLeft: "5%" }}>
        <div onClick={() => this._onThemeSelected(LIGHT_BLUE_THEME.NAME)} style={{ height: "50px", width: "50%", marginTop: "8%", marginBottom: "8%", marginLeft: "8%", marginRight: "4%", display: "relative" }}>
          <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: LIGHT_BLUE_THEME.BACKGROUND_COLOR, display: "block" }} />
          <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: LIGHT_BLUE_THEME.MAIN_COLOR, display: "block" }} />
        </div>
        <div onClick={() => this._onThemeSelected(LIGHT_RED_THEME.NAME)} style={{ height: "50px", width: "50%", marginTop: "8%", marginBottom: "8%", marginLeft: "4%", marginRight: "8%", display: "absolute" }}>
          <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: LIGHT_RED_THEME.BACKGROUND_COLOR, display: "block" }} />
          <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: LIGHT_RED_THEME.MAIN_COLOR, display: "block" }} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Container row fixed main" style={{ right: "0px", top: "35%" }}>
        <input type="checkbox" id="navigation" />
        <label htmlFor="navigation" style={{ background: this.state.mainColor }}>
          <Setting className="setting" innerColor={this.state.innerColor} outerColor={this.state.mainColor} />
        </label>
        <div className="right column jc-center" style={{ backgroundColor: this.state.backgroundColor }}>
          <div className="Container column jc-center" style={{ color: this.state.textColor, textAlign: "center", height: "30px" }}>
            Theme Selector
          </div>
          {this._renderMainThemes()}
          <div className="Container row" style={{ flexWrap: "wrap", height: "60%" }}>
            <div style={{ height: "30px", width: "30px", marginTop: "8%", marginBottom: "8%", marginLeft: "8%", marginRight: "4%", display: "block" }}>
              <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: "gray", display: "block" }}>

              </div>
              <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: "white", display: "block" }}>

              </div>
            </div>
            <div style={{ height: "30px", width: "30px", marginTop: "8%", marginBottom: "8%", marginLeft: "8%", marginRight: "4%", display: "block" }}>
              <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: "gray", display: "block" }}>

              </div>
              <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: "white", display: "block" }}>

              </div>
            </div>
            <div style={{ height: "30px", width: "30px", marginTop: "8%", marginBottom: "8%", marginLeft: "8%", marginRight: "4%", display: "block" }}>
              <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: "gray", display: "block" }}>

              </div>
              <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: "white", display: "block" }}>

              </div>
            </div>
            <div style={{ height: "30px", width: "30px", marginTop: "8%", marginBottom: "8%", marginLeft: "8%", marginRight: "4%", display: "block" }}>
              <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: "gray", display: "block" }}>

              </div>
              <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: "white", display: "block" }}>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}