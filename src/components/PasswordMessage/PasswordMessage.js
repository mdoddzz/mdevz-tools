import React, { Component } from 'react'
import './PasswordMessage.css'
import {
    Message,
    Icon,
    Button,
    Segment,
    Popup,
    Input
  } from 'semantic-ui-react'

export default class PasswordMessage extends Component {

    componentWillMount() {
      this.setState({
        isOpen: false
      });

      this.passwordInput = React.createRef();

      // This binding is necessary to make `this` work in the callback
      this.handleCopy = this.handleCopy.bind(this);
    }

    componentDidMount() {
      if(this.props.copyToClipboard) {
        this.handleCopy();
      }
    }

    handleCopy() {
      this.passwordInput.current.select();
      document.execCommand('copy');

      this.setState({ 
        isOpen: true
      })

      this.timeout = setTimeout(() => {
        this.setState({ 
          isOpen: false
        })
      }, 1500)
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
                    <Input className="PasswordOutput" readonly value={this.props.password.password} ref={this.passwordInput} type={this.props.password.hidePassword ? 'password' : 'text'}/>
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