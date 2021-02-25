import React, { Component } from 'react'
import {
  Container,
  Header
} from 'semantic-ui-react'

export default class UrlShortener extends Component {
  render() {
    return (
      <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>URL Shortner</Header>
      </Container>
    )
  }
}