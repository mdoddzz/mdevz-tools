import React, { Component } from 'react'
import { PassGenForm } from '../../components'

const lengthOptions = []
for (var i = 1; i <= 32; i++) {
    lengthOptions.push({ key: i, text: i, value: i })
}

export default class PasswordGenerator extends Component {
  render() {
    return (
      <div className="pass-gen-page">
        <h1>Password Generator</h1>
        <PassGenForm />
      </div>
    )
  }
}