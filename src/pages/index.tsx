import React, { Component } from 'react'
import StandardLayout from '../components/StandardLayout/StandardLayout';
import Link from 'next/link'
import {
  Container,
  Header,
  Card,
  Image,
  Tab
} from 'semantic-ui-react'

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

const items = [
  {
      header: 'Json Formatter',
      description:
      'Format json string to how you require',
      meta: 'v1',
      image: '/images/homeIcons/jsonformatter.svg',
      to: "/general/json-formatter",
      color: "teal" as const,
      type: 'General'
  },
  {
      header: 'URL Shortener',
      description:
      'Create short urls for when characters are limited or you want a sleeker looking url.',
      meta: 'v1',
      image: '/images/homeIcons/urlshortener.svg',
      to: "/general/url-shortener",
      color: "teal" as const,
      type: 'General'
  },
  {
      header: 'DNS Checker',
      description:
      'Check a hostnames DNS on multiple DNS servers.',
      meta: 'v1',
      image: '/images/homeIcons/dnschecker.svg',
      to: "/general/dns-checker",
      color: "teal" as const,
      type: 'General'
  },
  {
      header: 'Password Generator',
      description:
      'Create a secure password with adjustable settings',
      meta: 'v1',
      image: '/images/homeIcons/passwordgenerator.svg',
      to: "/security/password-generator",
      color: "red" as const,
      type: 'Security'
  },
  {
      header: 'Security Headers',
      description:
      'Check the security headers of your website and see where security could be improved',
      meta: 'v1',
      image: '/images/homeIcons/securityheaders.svg',
      to: "/security/security-headers",
      color: "red" as const,
      type: 'Security'
  },
]

const CardGroup = ({ filter }) => (
  <Card.Group>
    {items.map(item => filter ? 
      item.type === filter ? <Link href={item.to}><Card {...item} /></Link> : ''
      : 
      <Link href={item.to}><Card {...item} /></Link>)
    }
  </Card.Group>
)

const ToolTabs = () => (
  <Tab 
    menu={{ attached: false, tabular: false }} 
    panes={tabs} />
)

export default class HomePage extends Component {
  render() {
    return (
      <StandardLayout>
        <Container text style={{ marginTop: '7em' }}>
          <Image centered size="medium" src="/images/mdevz-tools-logo-white.svg" />
          <Header as='h1'>About</Header>
          <p>This is a collection of useful tools for web developers. Designed to simplify some basic tasks completed as a developer.</p>

          <Header as='h2'>Tools</Header>

          <ToolTabs />

        </Container>
    
      </StandardLayout>
    )
  }
}