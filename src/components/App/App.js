import React, { Component } from 'react'
import { NavBar } from '../';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar>

          <main>
            {this.props.children}
          </main>

          <footer>
            This is the footer
          </footer>

        </NavBar>
      </div>
    );
  }
}

export default App;
