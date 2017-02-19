import React, { Component } from 'react';
import AddInterest from '../components/add-interest'
import CurrentInterests from '../components/current-interests'


class Home extends Component {

  // the img here is the background image on the homepage
  render() {
    return (
      <div className="home_page">
        <AddInterest />
        <CurrentInterests />
        { this.props.children }
      <img src='favicon.ico' className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Home;
