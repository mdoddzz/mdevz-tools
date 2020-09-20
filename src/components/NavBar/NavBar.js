import _ from "lodash";
import React, { Component } from "react";
import { createMedia } from "@artsy/fresnel";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/mdevz-icon-purple.svg";
import {
  Icon,
  Image,
  Menu,
  Sidebar,
  Segment ,
  Dropdown
} from "semantic-ui-react";
import './NavBar.css'

const NavBarDropdown = ({
  dropdownItems,
  id,
  text,
  to
}) => (
  <Dropdown 
    key={id}
    item 
    text={text}
    as={NavLink}
    exact= {to === '/' ? true : false} 
    to={to}
    onClick={e => e.preventDefault()}>
   <Dropdown.Menu>
     {
       dropdownItems.map((dropdownItem) => 
        <Dropdown.Item
         key={dropdownItem.key}
         as={NavLink}
         exact= { dropdownItem.to === '/' ? true : false } 
         to={to + dropdownItem.to}>
           { dropdownItem.content }
         </Dropdown.Item>
      )
     }
   </Dropdown.Menu>
  </Dropdown>
);

const NavBarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      vertical
      visible={visible}
      width='thin'
    >
      <Menu.Item
        as={Link} 
        to='/'
        key="home">
        <Image size="mini" src={logo} />
        <h4>mDevz Tools</h4>
      </Menu.Item>
     {_.map(leftItems, item => item.dropdown ? 
      <NavBarDropdown 
        dropdownItems={item.dropdown}
        key={item.key}
        text={item.content}
        to={item.to}
      /> 
      : 
      <Menu.Item {...item} />)
      }
    </Sidebar>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      <Menu fixed="top">
        <Menu.Item
         as={Link} 
         to='/'
         key="home">
          <Image size="mini" src={logo} />
        </Menu.Item>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
          {_.map(rightItems, item => <Menu.Item {...item} />)}
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed="top">
    <Menu.Item 
      as={Link} 
      to='/'
      key="home">
      <Image size="mini" src={logo} />
    </Menu.Item>

    {_.map(leftItems, item => item.dropdown ? 
      <NavBarDropdown 
        dropdownItems={item.dropdown}
        key={item.key}
        text={item.content}
        to={item.to}
      /> 
      : 
      <Menu.Item {...item} />)
    }

    <Menu.Menu position="right">
      {_.map(rightItems, item => item.dropdown ? 
        <NavBarDropdown 
          dropdownItems={item.dropdown}
          key={item.key}
          text={item.content}
          to={item.to}
        /> 
        : 
        <Menu.Item {...item} />)
      }
    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <div>{children}</div>
);

const AppMedia = createMedia({
  breakpoints: {
    mobile: 0,
    computer: 992
  }
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

class ResponsiveNavBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div>

        <style>{mediaStyles}</style>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item
              as={Link} 
              to='/'
              key="home">
              <Image size="mini" src={logo} />
              <h4>mDevz Tools</h4>
            </Menu.Item>
          {_.map(leftItems, item => item.dropdown ? 
            <NavBarDropdown 
              dropdownItems={item.dropdown}
              key={item.key}
              text={item.content}
              to={item.to}
            /> 
            : 
            <Menu.Item {...item} />)
            }
          </Sidebar>
          <Sidebar.Pusher
            dimmed={visible}
            onClick={this.handlePusher}
            style={{ minHeight: "100vh" }}
          >
            <Menu fixed="top">
              <Menu.Item
              as={Link} 
              to='/'
              key="home">
                <Image size="mini" src={logo} />
              </Menu.Item>
              <MediaContextProvider>
                <Menu.Menu as={Media} at="mobile">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                </Menu.Menu>
                <Menu.Menu as={Media} greaterThanOrEqual="computer">
                  {_.map(leftItems, item => item.dropdown ? 
                      <NavBarDropdown 
                        dropdownItems={item.dropdown}
                        key={item.key}
                        text={item.content}
                        to={item.to}
                      /> 
                      : 
                      <Menu.Item {...item} />)
                    }
                </Menu.Menu>
              </MediaContextProvider>
              <Menu.Menu position="right">
                {_.map(rightItems, item => <Menu.Item {...item} />)}
              </Menu.Menu>
            </Menu>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const leftItems = [
  { as: NavLink, content: "General Tools", to: '/general', key: "security", dropdown: [
    { as: NavLink, content: "Json Formatter", to: '/jsonformatter', key: "jsongormatter" },
    { as: NavLink, content: "URL Shortener", to: '/urlshortener', key: "urlshortener" },
    { as: NavLink, content: "DNS Checker", to: '/dnschecker', key: "dnschecker" },
  ]},
  { as: NavLink, content: "Security Tools", to: '/security', key: "security", dropdown: [
    { as: NavLink, content: 'Password Generator', to: '/passwordgenerator', key: "passwordgenerator" },
    { as: NavLink, content: 'Security Headers', to: '/securityheaders', key: "securityheaders" }
  ]},
  { as: NavLink, content: 'Contact', to: '/contact', key: "contact" }
];
const rightItems = [
  //{ as: NavLink, content: "Login", to: '/login', key: "login" },
  //{ as: NavLink, content: "Register", to: '/register', key: "register" }
];

export default class NavMenu extends Component {

  render() {
    return (
      <ResponsiveNavBar leftItems={leftItems} rightItems={rightItems}>
        {this.props.children}
      </ResponsiveNavBar>
    )
  }

};