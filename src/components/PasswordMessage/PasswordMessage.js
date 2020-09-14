import React, { Component } from 'react'
import './PasswordMessage.css'
import {
    Message,
    Icon,
    Button,
    Segment,
    Popup,
    Form
  } from 'semantic-ui-react'

export default class PasswordMessage extends Component {

    componentWillMount() {
      this.setState({
        isOpen: false
      });

      // This binding is necessary to make `this` work in the callback
      this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy() {
      this.setState({ 
        isOpen: true
      })

      this.timeout = setTimeout(() => {
        this.setState({ 
          isOpen: false
        })
      }, 2000)
    }

    render() {
      return (
        <div>
            <Message
                onDismiss={(e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    this.props.parent.handleDismiss(this.props.password.id);
                }}
                icon
                attached="top"
                key={this.props.password.id}
                className="PasswordMessage"
            >
                <Icon name='user secret' />
                <Message.Content>
                    <Message.Header>Your password is:</Message.Header>
                    <Form.Input className="PasswordOutput" readonly value={this.props.password.password}/>
                    <Popup content="Copied" open={this.state.isOpen} trigger={<Button inline size="medium" icon="copy" onClick={this.handleCopy} />} />
                </Message.Content>
            </Message>
            <Segment attached="bottom" size="mini">
                <b>Generated at:</b> {this.props.password.generated}<br />
                <b>Settings: </b>
            </Segment>
        </div>
      )
    }
  }