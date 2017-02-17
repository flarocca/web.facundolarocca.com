import React, { Component } from 'react';
import Experience from './Experience';

export default class ExperienceContainer extends Component {
  render() {
    return (
      <div>
        <Experience
          backgroundColor={this.props.color}
          fontColor={this.props.fontColor}
          title={'Web.com'}
          description={this.props.languageSet.WEB_DOT_COM}
          period={this.props.languageSet.NOV + " 2016 - " + this.props.languageSet.PRESENT} />
        <Experience
          backgroundColor={this.props.color}
          fontColor={this.props.fontColor}
          title={'Isban'}
          description={this.props.languageSet.ISBAN}
          period={this.props.languageSet.FEB + " 2015 - " + this.props.languageSet.NOV + " 2016"} />
        <Experience
          backgroundColor={this.props.color}
          fontColor={this.props.fontColor}
          title={'Andreani'}
          description={this.props.languageSet.ANDREANI}
          period={this.props.languageSet.OCT + " 2012 - " + this.props.languageSet.FEB + " 2015"} />
        <Experience
          backgroundColor={this.props.color}
          fontColor={this.props.fontColor}
          title={'Open Solutions'}
          description={this.props.languageSet.OPEN_SOLUTIONS}
          period={this.props.languageSet.NOV + " 2008 - " + this.props.languageSet.SEP + " 2012"} />
      </div>
    );
  }
}