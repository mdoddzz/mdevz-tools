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
  {key: 2, text: "Feature Request", value: "Feature Request"},
  {key: 3, text: "Report Error", value: "Report Error"},
  {key: 4, text: "Press", value: "Press"},
  {key: 1, text: "Contact Developer", value: "Contact Developer"},
  {key: 5, text: "Other", value: "Other"}
]

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "", email: "", reason: "", message: "", botField: "",
      error: false, errorMessage: "", success: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {

    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "contact",
        "name": this.state.name,
        "email": this.state.email,
        "reason": this.state.reason,
        "message": this.state.message,
        "bot-field": this.state.botField,
        "isValidated": false
      })
    })
      .then(res => console.log(res))
      .then(() => this.handleSuccess())
      .catch(error =>  this.handleError(error));
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
    const { name, email, reason, message, success, error, errorMessage  } = this.state;
    return (
      <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Contact Us</Header>

          <p>We are always happy to hear from you, any feedback or questions are appreciated and should receive a response as quickly as possible</p>

          <FormContainer success={success} error={error} errorMessage={errorMessage} onSubmit={this.handleSubmit} >
            <input type="hidden" name="form-name" value="contact" />  
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="botField" onChange={this.handleChange} />
              </label>
            </div>
            <Form.Field
              required
              label='Name' 
              control={Input}
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <Form.Field
              required
              label='Email' 
              control={Input}
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <Form.Field
              required
              label='Reason for Contact' 
              control={Select}
              name="reason"
              value={reason}
              options={contactReasons}
              onChange={this.handleChange}
            />
            <Form.Field
              required
              label='Message' 
              control={TextArea}
              name="message"
              value={message}
              onChange={this.handleChange}
            />
            <Button 
              animated
              floated='right'
              primary
              type='submit'
              >
              <Button.Content visible>Send</Button.Content>
              <Button.Content hidden >
                <Icon name='send' />
              </Button.Content>
            </Button>
          </FormContainer>
      </Container>
    )
  }
}