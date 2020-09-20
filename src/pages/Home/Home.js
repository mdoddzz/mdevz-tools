import React, { Component } from 'react'
import './Home.css';
import logo from '../../images/mdevz-tools-logo-white.svg'
import { items } from '../../config/HomePage'
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