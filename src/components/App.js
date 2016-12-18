import React, { Component } from 'react';
import '../css/App.css';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader translationProvider={this.props.translationProvider} imageProvider={this.props.imageProvider}/>
        <h2>Facundo La Rocca</h2>
        <p className="App-intro">
          This page is being built.
        </p>
        <AppFooter translationProvider={this.props.translationProvider} imageProvider={this.props.imageProvider}/>
      </div>
    );
  }

  _renderHeader() {
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
}

export default App;
