import React, { Component } from 'react'
import {
  Container,
  Header
} from 'semantic-ui-react'

export default class Contact extends Component {
  render() {
    return (
      <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Contact Us</Header>
      </Container>
    )
  }
}