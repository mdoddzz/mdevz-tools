import React, { Component } from 'react'
import {
  Container,
  Header
} from 'semantic-ui-react'

export default class SecurityHeaders extends Component {
  render() {
    return (
      <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Security Headers</Header>
      </Container>
    )
  }
}