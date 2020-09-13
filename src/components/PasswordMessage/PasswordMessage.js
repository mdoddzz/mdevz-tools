import React, { Component } from 'react'
import {
    Message,
    Segment
  } from 'semantic-ui-react'

export default class PasswordMessage extends Component {
    render() {
      return (
        <div>
            <Message
                onDismiss={(e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    this.props.parent.handleDismiss(this.props.password.id);
                }}
                attached="top"
                icon="user secret"
                key={this.props.password.id}
                header='Your password is:'
                content={this.props.password.password}
            />
            <Segment attached="bottom" size="mini">
                <b>Generated at:</b> {this.props.password.generated}<br />
                <b>Settings: </b>
            </Segment>
        </div>
      )
    }
  }