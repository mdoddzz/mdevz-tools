import React, { Component } from 'react'
import StandardLayout from '../../components/StandardLayout/StandardLayout';
import {
  Container,
  Header
} from 'semantic-ui-react'

export default class GeneralIndex extends Component {
  render() {
    return (
        <StandardLayout>
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>General Tools</Header>
            </Container>
        </StandardLayout>
    )
  }
}