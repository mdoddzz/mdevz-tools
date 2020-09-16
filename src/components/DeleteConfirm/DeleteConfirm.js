import React, { Component } from 'react'
import {
    Confirm,
    Button
  } from 'semantic-ui-react'

export default class DeleteConfirm extends Component {
    render() {
      return (
        <Confirm
            open={this.props.open}
            onCancel={this.props.onCancel}
            onConfirm={this.props.onConfirm}
            content={this.props.content}
            size="mini"
            dimmer="blurring"
            confirmButton={<Button primary={false} color='red'>Delete</Button>}
        />
      )
    }
  }