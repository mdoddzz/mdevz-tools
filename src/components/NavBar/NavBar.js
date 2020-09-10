import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import './NavBar.css'

export default class NavMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='password generator'
          active={activeItem === 'password generator'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='json formatter'
          active={activeItem === 'json formatter'}
          onClick={this.handleItemClick}
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
