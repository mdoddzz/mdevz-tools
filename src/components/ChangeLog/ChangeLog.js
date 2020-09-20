import React, { Component } from 'react'
import * as changeLogs from '../../changelogs'; 
import {
    Divider,
    Header,
    Label,
    Accordion,
    Icon,
    List
  } from 'semantic-ui-react'

export default class ChangeLog extends Component {

    state = {
      activeIndex: 0
    }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }

    render() {
      const { activeIndex } = this.state
      return (
        <div className="changeLog">
          <Divider />
          <Header as="h3" style={{ textAlign: "left" }}>Change Log <Label style={{ float: "right" }}>Current Version <Label.Detail>1.12</Label.Detail></Label></Header>
          <Accordion>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              Version 1.2
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
            <List bulleted>
              <List.Item>
                <Label size="tiny" color="green">Feature</Label> 
                Added something good
              </List.Item>
              <List.Item>
                <Label size="tiny" color="red">Bug</Label> 
                Fixed something bad
              </List.Item>
              <List.Item>
                <Label size="tiny" color="red">Removed</Label> 
                Fixed something bad
              </List.Item>
              <List.Item>
                <Label size="tiny" color="yellow">Changed</Label> 
                Something is now something else
              </List.Item>
              <List.Item>
                <Label size="tiny" color="yellow">Updated</Label> 
                The wording of the title has been updated
              </List.Item>
            </List>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              What kinds of dogs are there?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>
                There are many breeds of dogs. Each breed varies in size and
                temperament. Owners often select a breed of dog that they find to be
                compatible with their own lifestyle and desires from a companion.
              </p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              How do you acquire a dog?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <p>
                Three common ways for a prospective owner to acquire a dog is from
                pet shops, private owners, or shelters.
              </p>
              <p>
                A pet shop may be the most convenient way to buy a dog. Buying a dog
                from a private owner allows you to assess the pedigree and
                upbringing of your dog before choosing to take it home. Lastly,
                finding your dog from a shelter, helps give a good home to a dog who
                may not find one so readily.
              </p>
            </Accordion.Content>
          </Accordion>
        </div>
      )
    }
  }