import React, { Component } from 'react'
import {
  Container,
  Header,
  Card,
  Responsive,
  Image
} from 'semantic-ui-react'

const items = [
  {
    header: 'Json Formatter',
    description:
      'Format json string to how you require',
    meta: 'v1.2',
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    href: "/jsonformatter",
    color: "teal"
  },
  {
    header: 'URL Shortener',
    description:
      'Create short urls for when characters are limited or you want a sleeker looking url.',
    meta: 'v1',
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    href: "/urlshortener",
    color: "teal"
  },
  {
    header: 'Password Generator',
    description:
      'Create a secure password with adjustable settings',
    meta: 'v1',
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    color: "red"
  },
  {
    header: 'Security Headers',
    description:
      'Check the security headers of your website and see where security could be improved',
    meta: 'v1',
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    color: "red"
  },
]

const CardDesktopGroup = () => <Card.Group itemsPerRow="3" items={items} />

const CardMobileGroup = () => <Card.Group itemsPerRow="1" centered items={items} />

export default class HomePage extends Component {
  render() {
    return (
      <div>
      <Container text style={{ marginTop: '7em' }}>
        <Image centered size="small" src="https://react.semantic-ui.com/logo.png" />
        <Header as='h1'>Tool List</Header>
        <p>This is a collection of useful developer/ web tools. Designed to simplify some basic tasks completed as a developer.</p>

        <p>Put buttone here that match colours like [general] and [security] (red) that will filter the list shown</p>

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