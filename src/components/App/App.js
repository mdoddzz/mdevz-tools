import React, { Component } from 'react'
import { NavBar, FooterBar } from '../';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar>

          <main>
            {this.props.children}
          </main>

          <FooterBar />
          
        </NavBar>
      </div>
    );
  }
}

export default App;
