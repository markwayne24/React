import React, { Component } from 'react';
import './css/App.css';
import Headers from './commons/Header';
import Footer from './commons/Footer';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Headers />
        {this.props.children}
      </div>
    );
  }
}

export default App;