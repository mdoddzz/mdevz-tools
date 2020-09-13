import React, { Component } from 'react'
import { FormContainer } from '../../components'
import './PasswordGenerator.css'
import {
  Container,
  Form,
  Dropdown,
  Checkbox,
  Button,
  Message,
  Segment
} from 'semantic-ui-react'

const lengthOptions = []
for (var i = 8; i <= 32; i++) {
    lengthOptions.push({ text: i, value: i })
}

export default class PasswordGenerator extends Component {

  componentWillMount() {
    this.setState({
      options: lengthOptions,
      passwordLength: 16,
      enableLowercase: true,
      enableUppercase: true,
      enableNumbers: true,
      enableSymbols: true,
      enableSimilar: true,
      password: "",
      passwordKey: 1,
      passwordList: [],
    });

    // This binding is necessary to make `this` work in the callback
    this.generatePassword = this.generatePassword.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  generatePassword() {
    var password = this.createPassword();
    this.setState({
      password: "test",
      passwordList: this.state.passwordList.concat({id: this.state.passwordKey, password: password, generated: new Date().toLocaleString()}),
      passwordKey: this.state.passwordKey + 1
    });
  }

  createPassword() {
      var result           = '';
      var length           = this.state.passwordLength;
      var lowerCharacters  = 'abcdefghijklmnopqrstuvwx';
      var higherCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var numbers          = '0123456789'
      var specialCharacters= '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
      var similarCharacters= '[iIl1L0oOb6gq9S5VUZ2]';
      var characters       = '';

      if(this.state.enableLowercase) characters = characters + lowerCharacters;
      if(this.state.enableUppercase) characters = characters + higherCharacters;
      if(this.state.enableNumbers) characters = characters + numbers;
      if(this.state.enableSymbols) characters = characters + specialCharacters;
      if(!this.state.enableSimilar) {
        var re = new RegExp(similarCharacters,"g")
        characters = characters.replace(re,'');
      }

      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result
  }

  handleDismiss(itemId) {
    if(window.confirm("Are you sure you want to delete this password? It will not be recoverable.")){

      var passwordList = this.state.passwordList;
      const itemIndex = passwordList.findIndex(item => item.id === itemId);

      if (itemIndex === -1) return;
      passwordList.splice(itemIndex, 1);
      this.setState({
        passwordList: passwordList
      })

   }
  }

  handleChange = (fieldName) => (event, {value}) => {
    this.setState({ [fieldName]: value });
  }

  handleCheckboxChange = (fieldName) => (event, { checked }) => {
    this.setState({ [fieldName]: checked });
  }

  render() {

    var passwordList = this.state.passwordList

    return (
      <Container text style={{ marginTop: '7em' }}>
          <h1>Password Generator</h1>

          <p>Make sure to include warning for insecure passwords and maybe a strength indicator</p>
          <FormContainer>
            <Form.Field inline>
              <label>Number of Characters</label>
              <div>
                <Dropdown placeholder="Select" selection defaultValue={this.state.passwordLength} options={this.state.options} onChange={this.handleChange("passwordLength")}></Dropdown>
              </div>
            </Form.Field>      
            <Form.Field inline>
              <label>Include Lowercase Characters</label>
              <Checkbox defaultChecked="true" toggle onChange={this.handleCheckboxChange("enableLowercase")} />
            </Form.Field>
            <Form.Field inline>
              <label>Include Uppercase Characters</label>
              <Checkbox defaultChecked="true" toggle onChange={this.handleCheckboxChange("enableUppercase")} />
            </Form.Field>
            <Form.Field inline>
              <label>Include Numbers</label>
              <Checkbox defaultChecked="true" toggle onChange={this.handleCheckboxChange("enableNumbers")}></Checkbox>
            </Form.Field>
            <Form.Field inline>
              <label>Include Symbols</label>
              <Checkbox defaultChecked="true" toggle onChange={this.handleCheckboxChange("enableSymbols")}></Checkbox>
            </Form.Field>
            <Form.Field inline>
              <label>Include Similar Characters</label>
              <Checkbox defaultChecked="true" toggle onChange={this.handleCheckboxChange('enableSimilar')} />
            </Form.Field>
            <Button 
                onClick={this.generatePassword}
                >
                Submit
            </Button>
            {[...passwordList].reverse().map((password, index) => 
              <div>
                <Message
                  onDismiss={(e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    this.handleDismiss(password.id);
                  }}
                  attached="top"
                  icon="user secret"
                  key={password.id}
                  header='Your password is:'
                  content={password.password}
                />
                <Segment attached="bottom" size="mini">
                  <b>Generated at:</b> {password.generated}<br />
                  <b>Settings: </b>
                </Segment>
              </div>
            )}
          </FormContainer>
      </Container>
    )
  }
}