import React, { Component } from 'react'
import './Home.css';
import { Link } from "react-router-dom";
import logo from '../../images/mdevz-tools-logo-white.svg'
import jsonImage from '../../images/homeIcons/jsonformatter.png'
import passwordImg from '../../images/homeIcons/passwordgenerator.png'
import securityImg from '../../images/homeIcons/securityheaders.png'
import urlImage from '../../images/homeIcons/urlshortener.png'
import {
  Container,
  Header,
  Card,
  Responsive,
  Image,
  Button
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
    color: "teal"
  },
  {
    header: 'URL Shortener',
    description:
      'Create short urls for when characters are limited or you want a sleeker looking url.',
    meta: 'v1',
    image: urlImage,
    as: Link,
    to: "/urlshortener",
    color: "teal"
  },
  {
    header: 'Password Generator',
    description:
      'Create a secure password with adjustable settings',
    meta: 'v1',
    image: passwordImg,
    as: Link,
    to: "/security/passwordgenerator",
    color: "red"
  },
  {
    header: 'Security Headers',
    description:
      'Check the security headers of your website and see where security could be improved',
    meta: 'v1',
    image: securityImg,
    as: Link,
    to: "/security/securityheaders",
    color: "red"
  },
]

const CardDesktopGroup = () => <Card.Group itemsPerRow="3" items={items} />

const CardMobileGroup = () => <Card.Group itemsPerRow="1" centered items={items} />

const FilterButtons = () => (
  <Button.Group buttons={[
    { content: 'General', color: 'teal' }, 
    { content: 'Security', color: 'red' }, 
    { content: 'All', disabled: true }, 
  ]} />
)

export default class HomePage extends Component {
  render() {
    return (
      <div>
      <Container text style={{ marginTop: '7em' }}>
        <Image centered size="medium" src={logo} />
        <Header as='h1'>About</Header>
        <p>This is a collection of useful developer/ web tools. Designed to simplify some basic tasks completed as a developer.</p>

        <Header as="h5">Filter Tools:</Header>

        <FilterButtons />

        <br />

        <Header as='h2'>Tools</Header>

        <Responsive {...Responsive.onlyMobile}>
         <CardMobileGroup />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <CardDesktopGroup />
        </Responsive>
  
      </Container>
  
    </div>
    )
  }
}