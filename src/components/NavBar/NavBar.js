import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Button, Menu } from 'semantic-ui-react'
import './NavBar.css'

export default class NavMenu extends Component {

  render() {
    return (
      <Menu>
        <Menu.Item
          name='home'
          as={NavLink}
          exact to='/'
        />
        <Menu.Item
          name='password generator'
          as={NavLink}
          to="/passwordgenerator"
        />
        <Menu.Item
          name='json formatter'
          as={NavLink}
          to='/jsonformatter'
        />

        <Menu.Menu position='right'>
            <Menu.Item>
            <Button>Log In</Button>
          </Menu.Item>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}