import React, { Component } from 'react';
import Facebook from '../images/svg/Facebook'
import GitHub from '../images/svg/GitHub';
import LinkedIn from '../images/svg/LinkedIn';
import StackOverflow from '../images/svg/StackOverflow'
import ImageSources from '../constants/ImageSources';
import ImageProvider from '../services/ImageProvider';
import AppStore from '../stores/AppStore';

export default class AppFooter extends Component {
  constructor(props) {
    super(props);

    this._imageProvider = new ImageProvider();
    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this.state = {
      languageSet: this.props.languageSet,
      theme: this.props.theme
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  _onAppSessionChange() {
    this.setState({
      languageSet: AppStore.getLanguageSet(),
      theme: AppStore.getThemeSelected()
    });
  }

  render() {
    return (
      <div id="footer" className="Container row" style={{ justifyContent: "space-between", backgroundColor: this.state.theme.COLOR_4 }}>
        <div className="Container row" style={{ width: "75%" }}>
          <p className="text" style={{ marginLeft: "5%", fontSize: "small", color: "white" }}>
            Copyright &copy; 2017 Facundo La Rocca. All right reserved.
            Made with <i><a href={ImageSources.REACT} className="text" style={{ fontSize: "small", color: "white" }}>ReactJS.</a></i>
            <a href={ImageSources.REACT}><img src={this._imageProvider.getImage('REC')} className="logo" alt="ReactJs" style={{ height: "20px" }} /></a>
          </p>
        </div>
        <div className="Container row" style={{ marginRight: "2%" }}>
          <a className="Container column jc-center" href={ImageSources.FACEBOOK_PROFILE}><Facebook className="icon" innerColor="white" outerColor="transparent" /></a>
          <a className="Container column jc-center" href={ImageSources.STACKOVERFLOW_PROFILE}><StackOverflow className="icon-med" innerColor="white" outerColor="transparent" /></a>
          <a className="Container column jc-center" href={ImageSources.LINKEDIN_PROFILE}><LinkedIn className="icon-large" innerColor="white" outerColor="transparent" /></a>
          <a className="Container column jc-center" href={ImageSources.GITHUB_PROFILE}><GitHub className="icon" innerColor="white" outerColor={this.state.theme.COLOR_4} /></a>
        </div>
      </div>
    );
  }
}