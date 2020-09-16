import React, { Component } from 'react'
import './FormContainer.css'
import {
    Form,
    Message
  } from 'semantic-ui-react'

export default class FormContainer extends Component {
    render() {
      return (
        <Form 
          className="default form"
          onSubmit={this.props.onSubmit}
          >
            <Message
              visible={this.props.error}
              error
              header='Error'
              content={this.props.errorMessage ? this.props.errorMessage : "You can only sign up for an account once with a given e-mail address." }
              />
            <Message
              visible={this.props.success}
              success
              header='Success!'
              content='Your request has been successfully submitted.'
              />
            {this.props.children}

        </Form>
      )
    }
  }