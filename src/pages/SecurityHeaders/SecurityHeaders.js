import React, { Component } from 'react'
import './SecurityHeaders.css';
import {
  Container,
  Header,
  Input,
  Message,
  Segment,
  Table
} from 'semantic-ui-react'

export default class SecurityHeaders extends Component {
  
  state = {
    headers: null,
    site: '',
    error: false
  }

  constructor(props) {
    super();

    this.checkHeaders = this.checkHeaders.bind(this);
  }

  checkHeaders = (e) => { 

    fetch("http://tools-api.mdevz.uk/headers/check?site=" + this.state.site)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Could not retrieve website headers");
        }
      })
      .then((result) => this.setState({
          headers: result,
          error: false
        }))
      .catch(error => this.setState({ 
        error,
        headers: null
      }));

  }

  handleChange = (e, data) => this.setState({ [data.name]: data.value});

  render() {
    const {headers, error} = this.state
    return (
      <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Security Headers</Header>

          <p>This page is used to check your website http headers and learn how they compare to security standards.</p>

          <Container textAlign='center'>
            <Input 
              error={error}
              action={{
                color: 'teal',
                content: 'Scan',
                onClick: this.checkHeaders
              }} 
              name="site"
              onChange={this.handleChange}
              placeholder='Enter Site...' 
            />
          </Container>

          <Message 
            error 
            hidden={error ? false : true}
            header="Error!"
            content={error ? error.message : 'Unexpected Error'}
          />

          <Segment hidden={headers ? false : true} basic>
    
            <Header as='h2'>Results</Header>

            <Table celled striped className="headerTable">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan='2'>Raw Headers</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {headers && headers.map(item => (
                  <Table.Row>
                    <Table.Cell style={{ fontWeight: 'bold' }} >{item.split(/:(.+)/)[0]}</Table.Cell>
                    <Table.Cell>{item.split(/:(.+)/)[1]}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>

          </Segment>

      </Container>
    )
  }
}