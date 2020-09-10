import React, { Component } from 'react'
import { FormContainer } from '../'
import {
    Form,
    Button,
    Checkbox,
    Select,
  } from 'semantic-ui-react'

const lengthOptions = []
for (var i = 1; i <= 32; i++) {
    lengthOptions.push({ key: i, text: i, value: i })
}

export default class PasswordGenerator extends Component {
    render() {
      return (
        <FormContainer>
          <Form.Field
              control={Select}
              label='Length'
              options={lengthOptions}
            />
          <Form.Field
              control={Checkbox}
              label={{ children: 'Letters' }}
              />
          <Form.Field
              control={Checkbox}
              label={{ children: 'Numbers' }}
              />
          <Form.Field
              control={Checkbox}
              label={{ children: 'Symbols' }}
              />
          <Button 
              floated='right'
              >
              Submit
          </Button>
        </FormContainer>
      )
    }
  }