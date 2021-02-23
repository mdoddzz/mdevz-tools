import React, { Component } from 'react'
import {
    Divider,
    Image,
    List,
    Segment,
    Grid,
    Container,
    Header
  } from 'semantic-ui-react'

export default class FooterBar extends Component {
    render() {
      return (
        <footer>
          <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>
            <Grid divided inverted stackable>
                <Grid.Column width={3}>
                <Header inverted as='h4' content='General Tools' />
                <List link inverted>
                    <List.Item to="/json-formatter">Json Formatter</List.Item>
                    <List.Item to="/url-shortener">URL Shortener</List.Item>
                </List>
                </Grid.Column>
                <Grid.Column width={3}>
                <Header inverted as='h4' content='Security Tools' />
                <List link inverted>
                    <List.Item to="/security/password-generator">Password Generator</List.Item>
                    <List.Item to="/security/security-headers">Security Headers</List.Item>
                </List>
                </Grid.Column>
                <Grid.Column width={3}>
                <Header inverted as='h4' content='Other Links' />
                <List link inverted>
                    <List.Item to="/contact">Contact Us</List.Item>
                </List>
                </Grid.Column>
                <Grid.Column width={7}>
                <Header inverted as='h4' content='mDevz Tools' />
                <p>
                    This is a collection of useful developer/ web tools. Designed to simplify some basic tasks completed as a developer.
                </p>
                </Grid.Column>
            </Grid>
    
            <Divider inverted section />
            <Image centered size="mini" src="/images/mdevz-icon-white.svg" />
            <List horizontal inverted divided link size='small'>
                <List.Item  to="/sitemap">
                Site Map
                </List.Item>
                <List.Item to="/privacy">
                Privacy Policy
                </List.Item>
                <List.Item as='a' href='https://michaeldodd.co.uk' target="_blank">
                Created by Michael Dodd
                </List.Item>
            </List>
            </Container>
          </Segment>
        </footer>
      )
    }
  }