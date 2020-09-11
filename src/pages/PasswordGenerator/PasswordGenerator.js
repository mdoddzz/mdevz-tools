import React, { Component } from 'react'
import { PassGenForm } from '../../components'
import {
  Container,
} from 'semantic-ui-react'

const lengthOptions = []
for (var i = 1; i <= 32; i++) {
    lengthOptions.push({ key: i, text: i, value: i })
}

export default class PasswordGenerator extends Component {
  render() {
    return (
      <Container text style={{ marginTop: '7em' }}>
          <h1>Password Generator</h1>
          <PassGenForm />
      </Container>
    )
  }
}