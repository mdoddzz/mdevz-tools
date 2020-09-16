import React, { Component } from 'react'
import { FormContainer } from '../../components'
import {
  Container,
  Button,
  Form,
  Input,
  Icon,
  TextArea,
  Select,
  Header
} from 'semantic-ui-react'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const contactReasons = [
  {key: 0, text: "General Enquiry", value: "General Enquiry"},
  {key: 1, text: "Contact Developer", value: "Contact Developer"},
  {key: 2, text: "Feature Request", value: "Feature Request"},
  {key: 3, text: "Report Error", value: "Report Error"},
  {key: 4, text: "Press", value: "Press"},
  {key: 5, text: "Other", value: "Other"}
]

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "", email: "", reason: "", message: "", 
      nameError: false, emailError: false, reasonError: false, messageError: false,
      error: false, errorMessage: "", success: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {

    var error = false;
    // validate form
    if (this.state.name === '') {
      this.setState({nameError: true})
      error = true
    } else {
      this.setState({nameError: false})
      error = false
    }

    if (this.state.email === '') {
      this.setState({emailError: true})
      error = true
    } else {
      this.setState({emailError: false})
      error = false
    }

    if (this.state.reason === '') {
      this.setState({reasonError: true})
      error = true
    } else {
      this.setState({reasonError: false})
      error = false
    }

    if (this.state.message === '') {
      this.setState({messageError: true})
      error = true
    } else {
      this.setState({messageError: false})
      error = false
    }
    
    if(!error) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ 
          "form-name": "contact",
          "name": this.state.name,
          "email": this.state.email,
          "reason": this.state.reason,
          "message": this.state.message,
        })
      })
        .then(() => this.handleSuccess())
        .catch(error =>  this.handleError(error));
    } else {
      this.handleError("A required field has not been complete.")
    }

    e.preventDefault();
  };

  handleSuccess() {
    this.setState({ error: false, errorMessage: "", success: true, name: "", email: "", reason: "", message: "" });

    this.timeout = setTimeout(() => {
      this.setState({ 
        success: false
      })
    }, 5000)
  }

  handleError(error) {
    this.setState({error: true, errorMessage: error, success: false})

    this.timeout = setTimeout(() => {
      this.setState({ 
        error: false, errorMessage: ""
      })
    }, 5000)
  }

  handleChange = (e, data) => this.setState({ [data.name]: data.value, [data.name+"Error"]: false });

  render() {
    const { name, email, reason, message, nameError, emailError, reasonError, messageError, success, error, errorMessage  } = this.state;
    return (
      <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Contact Us</Header>

          <FormContainer success={success} error={error} errorMessage={errorMessage}>
            <Form.Field
              required
              label='Name' 
              control={Input}
              name="name"
              value={name}
              error={nameError}
              onChange={this.handleChange}
            />
            <Form.Field
              required
              label='Email' 
              control={Input}
              name="email"
              value={email}
              error={emailError}
              onChange={this.handleChange}
            />
            <Form.Field
              required
              label='Reason for Contact' 
              control={Select}
              name="reason"
              value={reason}
              error={reasonError}
              options={contactReasons}
              onChange={this.handleChange}
            />
            <Form.Field
              required
              label='Message' 
              control={TextArea}
              name="message"
              value={message}
              error={messageError}
              onChange={this.handleChange}
            />
            <Button 
              animated
              onClick={this.handleSubmit}
              floated='right'
              primary
              >
              <Button.Content visible>Send</Button.Content>
              <Button.Content hidden>
                <Icon name='send' />
              </Button.Content>
            </Button>
          </FormContainer>
      </Container>
    )
  }
}