import React, { Component } from 'react'
import {
  Container,
  Header,
  Input,
  Message,
  Segment,
  Table
} from 'semantic-ui-react'

export default class DnsChecker extends Component {
  
  state = {
    dns: null,
    site: '',
    error: false,
    scanning: false
  }

  constructor(props) {
    super();

    this.checkDns = this.checkDns.bind(this);
  }

  checkDns = (e) => { 

    this.setState({
      scanning: true,
      error: false,
      dns: null
    })

    fetch("http://tools-api.mdevz.uk/dns/check?site=" + this.state.site)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Could not retrieve dns");
        }
      })
      .then((result) => this.setState({
          dns: result.dns,
          error: false,
          scanning: false
      }))
      .catch(error => this.setState({ 
        error,
        dns: null,
        scanning: false
      }));

  }

  handleChange = (e, data) => this.setState({ [data.name]: data.value});

  render() {
    const {scanning, dns, error} = this.state
    return (
      <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>DNS Checker</Header>

          <p>This page is used to check your website dns.</p>

          <Container textAlign='center'>
            <Input 
              error={error ? true : false}
              action={{
                color: 'teal',
                content: scanning ? 'Scanning...' : 'Scan',
                onClick: this.checkDns
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

          <Segment hidden={dns ? false : true} basic>
    
            <Header as='h2'>Results</Header>

            <Table celled striped className="headerTable">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan='2'>DNS</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {dns && dns.map((item, i) => (
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