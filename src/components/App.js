import React, { Component } from 'react';
import '../css/App.css';
import ImageSources from '../constants/ImageSources';

class App extends Component {
  constructor(props) {
    super(props);

    this._changeLanguague = this._changeLanguague.bind(this);
    this.state = {
      translation: this.props.translationProvider.getTranslation('DEFAULT')
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a className="App-header-item"><b>{this.state.translation.WHO_I_AM}</b></a>
          <a className="App-header-item"><b>{this.state.translation.EXPERIENCE}</b></a>
          <a className="App-header-item"><b>{this.state.translation.CONTACT}</b></a>
          <span><a href="#" onClick={() => this._changeLanguague('ARG')}><img src={this.props.imageProvider.getImage('ARG')} className="App-lan-icon" alt="logo" /></a></span>
          <span><a href="#" onClick={() => this._changeLanguague('ENG')}><img src={this.props.imageProvider.getImage('ENG')} className="App-lan-icon" alt="logo" /></a></span>
        </div>
        <h2>Facundo La Rocca</h2>
        <p className="App-intro">
          This page is being built.
        </p>
        <div className="App-footer">
          <span><a href={ImageSources.STACKOVERFLOW_PROFILE}><img src={this.props.imageProvider.getImage('STK')} className="App-logo" alt="logo" /></a></span>
          <span><a href={ImageSources.LINKEDIN_PROFILE}><img src={this.props.imageProvider.getImage('LIN')} className="App-logo" alt="logo" /></a></span>
          <span><a href={ImageSources.GITHUB_PROFILE}><img src={this.props.imageProvider.getImage('GIT')} className="App-logo" alt="logo" /></a></span>
          <p className="App-footer-text">
            Powered by <k>Facundo La Rocca</k>
          </p>
        </div>
      </div>
    );
  }

  _changeLanguague(languague) {
    var translation = this.props.translationProvider.getTranslation(languague);
    this.setState({ translation });
  }
}

export default App;
