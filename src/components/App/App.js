import React, { Component } from 'react'
import { NavBar } from '../';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>

        <main>
          {this.props.children}
        </main>

        <footer>
          Your copyright message
        </footer>
      </div>
    );
  }
}

export default App;
