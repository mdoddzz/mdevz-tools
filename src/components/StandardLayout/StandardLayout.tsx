import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar';
import FooterBar from '../FooterBar/FooterBar'


class StandardLayout extends Component {
  render() {
    return (
      <div className="App" id="root">
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

export default StandardLayout;
