import React, { Component } from 'react'
import {
    Form,
    Message
  } from 'semantic-ui-react'

interface FormContainerProps {
  onSubmit(): any;
  error?: boolean;
  errorMessage?: string;
  success?: boolean
}
  
interface FormContainerState {
}

export default class FormContainer extends Component<FormContainerProps, FormContainerState> {
    render() {
      return (
        <Form 
          className="default form"
          onSubmit={this.props.onSubmit}
          action="/"
          >
            <Message
              visible={this.props.error}
              error
              header='Error'
              content={this.props.errorMessage ? this.props.errorMessage : "Unexpected Error." }
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