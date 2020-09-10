import React, { Component } from 'react'
import {
    Form,
    Message
  } from 'semantic-ui-react'

export default class FormContainer extends Component {
    render() {
      return (
        <Form>
            <Message
                error
                header='Action Forbidden'
                content='You can only sign up for an account once with a given e-mail address.'
                />
            {this.props.children}

        </Form>
      )
    }
  }