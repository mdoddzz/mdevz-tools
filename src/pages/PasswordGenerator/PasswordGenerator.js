import React, { Component } from 'react'
import { FormContainer } from '../../components'
import './PasswordGenerator.css'
import {
  Container,
  Form,
  Dropdown,
  Checkbox,
  Button
} from 'semantic-ui-react'

const lengthOptions = []
for (var i = 1; i <= 32; i++) {
    lengthOptions.push({ text: i, value: i })
}

export default class PasswordGenerator extends Component {

  componentWillMount() {
    this.setState({
      options: lengthOptions,
      selected: 16,
    });
  }

  render() {
    return (
      <Container text style={{ marginTop: '7em' }}>
          <h1>Password Generator</h1>

          <p>Make sure to include warning for insecure passwords and maybe a strength indicator</p>
          <FormContainer>
            <Form.Field inline>
              <label>Number of Characters</label>
              <div>
                <Dropdown placeholder="Select" selection defaultValue={this.state.selected} options={this.state.options}></Dropdown>
              </div>
            </Form.Field>      
            <Form.Field inline>
              <label>Include Lowercase Characters</label>
              <Checkbox></Checkbox>
            </Form.Field>
            <Form.Field inline>
              <label>Include Uppercase Characters</label>
              <Checkbox></Checkbox>
            </Form.Field>
            <Form.Field inline>
              <label>Include Numbers</label>
              <Checkbox></Checkbox>
            </Form.Field>
            <Form.Field inline>
              <label>Include Symbols</label>
              <Checkbox></Checkbox>
            </Form.Field>
            <Form.Field inline>
              <label>Include Similar Characters</label>
              <Checkbox></Checkbox>
            </Form.Field>
            <Button 
                floated='right'
                >
                Submit
            </Button>
          </FormContainer>
      </Container>
    )
  }
}