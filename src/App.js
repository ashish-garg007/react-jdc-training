import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to React JDC Training" onHeaderClick={this.onHeaderClick} />
        <Content text="Jaipur is awesome" />
      </div>
    );
  }

  onHeaderClick = event => {
    event.preventDefault();
    window.alert('You pressed the header');
  };
}

export default App;
