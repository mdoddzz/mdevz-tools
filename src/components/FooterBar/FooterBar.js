import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from "../../images/mdevz-icon-white.svg";
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
                    <List.Item as={Link} to="/jsonformatter">Json Formatter</List.Item>
                    <List.Item as={Link} to="/urlshortener">URL Shortener</List.Item>
                </List>
                </Grid.Column>
                <Grid.Column width={3}>
                <Header inverted as='h4' content='Security Tools' />
                <List link inverted>
                    <List.Item as={Link} to="/security/passwordgenerator">Password Generator</List.Item>
                    <List.Item as={Link} to="/security/securityheaders">Security Headers</List.Item>
                </List>
                </Grid.Column>
                <Grid.Column width={3}>
                <Header inverted as='h4' content='Other Links' />
                <List link inverted>
                    <List.Item as={Link} to="/contact">Contact Us</List.Item>
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
            <Image centered size="mini" src={logo} />
            <List horizontal inverted divided link size='small'>
                <List.Item as={Link}>
                Site Map
                </List.Item>
                <List.Item as={Link}>
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