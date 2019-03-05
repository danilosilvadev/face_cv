import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Context from '../utils/services/context';
import { BodyBackground } from '../utils/helpers/styled-helpers';
import { theme } from '../theme';
import { ThemeSelector } from "../components";
import { Header, About } from '../components';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      bgContext: {
        color: 'white'
      },
      themeContext: theme,
      pointsContext: 0,
    };

    this.actions = {
      changeThemeContext: this.handleChangeTheme = this.handleChangeTheme.bind(this),
    };

    this.handleContactPage = this.handleContactPage.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handlePortifolio = this.handlePortifolio.bind(this);
    this.handleExperiencePage = this.handleExperiencePage.bind(this);
    this.handleSkillsPage = this.handleSkillsPage.bind(this);
    this.handleHeader = this.handleHeader.bind(this);
  }

  handleChangeTheme(newBgColor) {
    this.setState({ bgContext: {
      color: newBgColor,
    }})
  }

  handleChangePoints(newPontuation) {
    this.setState({
      pointsContext: newPontuation,
    }, () => console.log(this.state.pointsContext))
  }

  handlePortifolio() {
    const { state, actions } = this;
    return (
      <div />
    );
  }

  handleSkillsPage() {
    const { state, actions } = this;
    return (
      <div />
    );
  }

  handleContactPage() {
    const { state, actions } = this;
    return (
      <div />
    );
  }

  handleExperiencePage() {
    const { state, actions } = this;
    return (
      <div />
    );
  }

  handleHeader() {
    const { state, actions } = this;
    return (
      <Header state={state} actions={actions}/>
    );
  }

  handleHome() {
    return <div />
  }

  render() {
    const { themeContext, bgContext: { color }} = this.state;
    return (
      <Context.Provider value={this.state}>
        <Router>
          <div>
            <BodyBackground
              theme={themeContext}
              backgroundColor={color}
            />
            <Route path="/" render={this.handleHeader} />
            <Route exact path="/" render={this.handleHome} />
            <Route exact path="/contact" render={this.handleContactPage} />
            <Route path="/experience" render={this.handleExperiencePage} />
          </div>
        </Router>
      </Context.Provider>
    );
  }
};