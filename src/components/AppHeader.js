import React, { Component } from 'react';
import '../css/App.css';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);

    this._changeLanguague = this._changeLanguague.bind(this);
    this.state = {
      translation: this.props.translationProvider.getTranslation('DEFAULT')
    }
  }

  render() {
    return (
      <div className="App-header">
        <a className="App-header-item"><b>{this.state.translation.WHO_I_AM}</b></a>
        <a className="App-header-item"><b>{this.state.translation.EXPERIENCE}</b></a>
        <a className="App-header-item"><b>{this.state.translation.CONTACT}</b></a>
        <span><a href="#" onClick={() => this._changeLanguague('ARG')}><img src={this.props.imageProvider.getImage('ARG')} className="App-lan-icon" alt="logo" /></a></span>
        <span><a href="#" onClick={() => this._changeLanguague('ENG')}><img src={this.props.imageProvider.getImage('ENG')} className="App-lan-icon" alt="logo" /></a></span>
      </div>
    );
  }

  _changeLanguague(languague) {
    var translation = this.props.translationProvider.getTranslation(languague);
    this.setState({ translation });
  }
}