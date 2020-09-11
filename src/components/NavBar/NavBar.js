import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Button, Menu, MenuItem, Dropdown } from 'semantic-ui-react'
import './NavBar.css'

const menuItems = [
  { id: 1, title: 'Home', link: '/' },
  { id: 3, title: 'Json Formatter', link: '/jsonformatter' },
  { id: 3, title: 'URL Shortener', link: '/urlshortener' },
  { id: 4, title: 'Security Tools', link: '/security', dropdown: [
    { id: 4.1, title: 'Password Generator', link: '/passwordgenerator' },
    { id: 4.2, title: 'Security Headers', link: '/securityheaders' }
  ]}
];

function DropdownMenuItems(props) {

  const dropdown = props.item.dropdown.map((dropdownItem) => 
    <Dropdown.Item
      key={dropdownItem.id}
      as={NavLink}
      exact= { dropdownItem.link === '/' ? true : false } 
      to={props.item.link + dropdownItem.link}>
        { dropdownItem.title }
      </Dropdown.Item>
  );

  return (
    <Dropdown 
      key={ props.item.id }
      item 
      text={ props.item.title }
      as={NavLink}
      exact= { props.item.link === '/' ? true : false } 
      to={ props.item.link }
      onClick={e => e.preventDefault()}
      >
       <Dropdown.Menu>
        { dropdown }
       </Dropdown.Menu>
    </Dropdown>
  )

}

function NavMenuItems(props) {
  
  const menu = props.items.map((menuItem) => {
    return  menuItem.dropdown ?
      <DropdownMenuItems item={ menuItem } /> 
      : 
      <Menu.Item
        key={menuItem.id}
        name={menuItem.title}
        as={NavLink}
        exact= { menuItem.link === '/' ? true : false } 
        to={menuItem.link}
      />
  });

  return (
    <Menu>
      { menu }
    </Menu>
  )

}

export default class NavMenu extends Component {

  render() {
    return (
      <Menu>
        <NavMenuItems items={ menuItems } />

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