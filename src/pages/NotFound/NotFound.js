import React, { Component } from 'react'
import image from '../../images/404.svg'
import {
  Container,
  Header
} from 'semantic-ui-react'

export default class JsonFormatter extends Component {
  render() {
    return (
      <Container text style={{ marginTop: '7em', textAlign: 'center' }}>
          <Header as='h1'>Error 404! Page Not Found</Header>
        
          <img src={image} alt="404 Error" style={{width: '50%'}}/>
      </Container>
    )
  }
}