import React, { Component } from 'react'
import './Home.css';
import { Link } from "react-router-dom";
import logo from '../../images/mdevz-tools-logo-white.svg'
import jsonImage from '../../images/homeIcons/jsonformatter.svg'
import passwordImg from '../../images/homeIcons/passwordgenerator.svg'
import securityImg from '../../images/homeIcons/securityheaders.svg'
import urlImage from '../../images/homeIcons/urlshortener.svg'
import {
  Container,
  Header,
  Card,
  Image,
  Tab
} from 'semantic-ui-react'

const items = [
  {
    header: 'Json Formatter',
    description:
      'Format json string to how you require',
    meta: 'v1.2',
    image: jsonImage,
    as: Link,
    to: "/jsonformatter",
    color: "teal",
    type: 'General'
  },
  {
    header: 'URL Shortener',
    description:
      'Create short urls for when characters are limited or you want a sleeker looking url.',
    meta: 'v1',
    image: urlImage,
    as: Link,
    to: "/urlshortener",
    color: "teal",
    type: 'General'
  },
  {
    header: 'Password Generator',
    description:
      'Create a secure password with adjustable settings',
    meta: 'v1',
    image: passwordImg,
    as: Link,
    to: "/security/passwordgenerator",
    color: "red",
    type: 'Security'
  },
  {
    header: 'Security Headers',
    description:
      'Check the security headers of your website and see where security could be improved',
    meta: 'v1',
    image: securityImg,
    as: Link,
    to: "/security/securityheaders",
    color: "red",
    type: 'Security'
  },
]

const tabs = [
    { 
      menuItem: {
        content: 'All',
        color: ''
      },
      render: () => <Tab.Pane attached={false}><CardGroup filter=""/></Tab.Pane>,
    }, 
    {
      menuItem: {
        content: 'General',
        color: 'teal'
      },
      render: () => <Tab.Pane attached={false}><CardGroup filter="General"/></Tab.Pane>,
    }, 
    { 
      menuItem: {
        content: 'Security',
        color: 'red'
      },
      render: () => <Tab.Pane attached={false}><CardGroup filter="Security"/></Tab.Pane>,
    }, 
]

const CardGroup = ({ filter }) => <Card.Group items={filter ? items.filter(item => item.type === filter) : items} />

const ToolTabs = () => (
  <Tab 
    menu={{ attached: false, tabular: false }} 
    panes={tabs} />
)

export default class HomePage extends Component {
  render() {
    return (
      <div>
      <Container text style={{ marginTop: '7em' }}>
        <Image centered size="medium" src={logo} />
        <Header as='h1'>About</Header>
        <p>This is a collection of useful developer/ web tools. Designed to simplify some basic tasks completed as a developer.</p>

        <Header as='h2'>Tools</Header>

        <ToolTabs />

      </Container>
  
    </div>
    )
  }
}