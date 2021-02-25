import React, { Component } from 'react'
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
    error: false,
    scanning: false
  }

  constructor(props) {
    super();

    this.checkHeaders = this.checkHeaders.bind(this);
  }

  checkHeaders = (e) => { 

    this.setState({
      scanning: true,
      error: false,
      headers: null
    })

    fetch("https://tools-api.mdevz.uk/headers/check?site=" + this.state.site)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Could not retrieve website headers");
        }
      })
      .then((result) => this.setState({
          headers: result.headers,
          error: false,
          scanning: false
      }))
      .catch(error => this.setState({ 
        error,
        headers: null,
        scanning: false
      }));

  }

  handleChange = (e, data) => this.setState({ [data.name]: data.value});

  render() {
    const {scanning, headers, error} = this.state
    return (
      <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Security Headers</Header>

          <p>This page is used to check your website http headers and learn how they compare to security standards.</p>

          <Container textAlign='center'>
            <Input 
              error={error ? true : false}
              action={{
                color: 'teal',
                content: scanning ? 'Scanning...' : 'Scan',
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
                {headers &&  headers.site_headers.map((item, i) => (
                  <Table.Row key={i}>
                    <Table.Cell style={{ fontWeight: 'bold' }} >{item.key}</Table.Cell>
                    <Table.Cell>{item.value}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>

          </Segment>
          
      </Container>
    )
  }
}