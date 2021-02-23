import React, { Component } from 'react'
import StandardLayout from '../../components/StandardLayout/StandardLayout';
import FormContainer from '../../components/FormContainer/FormContainer';
import PasswordMessage from '../../components/PasswordMessage/PasswordMessage';
import DeleteConfirm from '../../components/DeleteConfirm/DeleteConfirm';
import {
  Container,
  Form,
  Dropdown,
  Checkbox,
  Button,
  Divider
} from 'semantic-ui-react'

const lengthOptions = []
for (var i = 8; i <= 32; i++) {
    lengthOptions.push({ text: i, value: i })
}

export default class PasswordGenerator extends Component {

  state = {
    options: lengthOptions,
    passwordLength: 16,
    enableLowercase: true,
    enableUppercase: true,
    enableNumbers: true,
    enableSymbols: true,
    enableSimilar: true,
    hidePassword: false,
    copyToClipboard: false,
    password: "",
    passwordKey: 1,
    passwordList: [],

    deleteConfirmOpen: false,
    deleteItem: 0
  }

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.generatePassword = this.generatePassword.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this);
    this.handleDeleteCancel = this.handleDeleteCancel.bind(this);
  }

  generatePassword = (e) => {
    e.preventDefault()
    var password = this.createPassword();
    this.setState({
      password: "test",
      passwordList: this.state.passwordList.concat({id: this.state.passwordKey, password: password, generated: new Date().toLocaleString(), hidePassword: this.state.hidePassword}),
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
    this.setState({
      deleteConfirmOpen: true,
      deleteItem: itemId
    })
  }

  handleChange = (fieldName) => (event, {value}) => {
    this.setState({ [fieldName]: value });
  }

  handleCheckboxChange = (fieldName) => (event, { checked }) => {
    if((fieldName === "hidePassword" && this.state.copyToClipboard) || (fieldName === "copyToClipboard" && this.state.hidePassword)) {
      console.log(event)
      event.persist()
    } else {
      this.setState({ [fieldName]: checked });
    }
  }

  handleDeleteConfirm() {

    var passwordList = this.state.passwordList;
    const itemIndex = passwordList.findIndex(item => item.id === this.state.deleteItem  );

    if (itemIndex === -1) return;
    passwordList.splice(itemIndex, 1);
    this.setState({
      passwordList: passwordList,
      deleteConfirmOpen: false,
      deleteItem: 0
    })

  }

  handleDeleteCancel() {
    this.setState({
      deleteConfirmOpen: false,
      deleteItem: 0
    })
  }

  render() {

    var passwordList = this.state.passwordList

    return (
        <StandardLayout>
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
                    <Checkbox defaultChecked toggle onChange={this.handleCheckboxChange("enableLowercase")} />
                    </Form.Field>
                    <Form.Field inline>
                    <label>Include Uppercase Characters</label>
                    <Checkbox defaultChecked toggle onChange={this.handleCheckboxChange("enableUppercase")} />
                    </Form.Field>
                    <Form.Field inline>
                    <label>Include Numbers</label>
                    <Checkbox defaultChecked toggle onChange={this.handleCheckboxChange("enableNumbers")}></Checkbox>
                    </Form.Field>
                    <Form.Field inline>
                    <label>Include Special Characters</label>
                    <Checkbox defaultChecked toggle onChange={this.handleCheckboxChange("enableSymbols")}></Checkbox>
                    </Form.Field>
                    <Form.Field inline>
                    <label>Include Similar Characters</label>
                    <Checkbox defaultChecked toggle onChange={this.handleCheckboxChange('enableSimilar')} />
                    </Form.Field>
                    <Form.Field inline>
                    <label>Hide Password on Generate</label>
                    <Checkbox toggle onChange={this.handleCheckboxChange('hidePassword')} />
                    </Form.Field>
                    <Form.Field inline>
                    <label>Copy to Clipboard on Generate</label>
                    <Checkbox toggle onChange={this.handleCheckboxChange('copyToClipboard')} />
                    </Form.Field>
                    <Button 
                        onClick={this.generatePassword}
                        floated='right'
                        primary
                        >
                        Generate Password
                    </Button>
                    <Divider clearing hidden />
                    <div className="passwordList">
                    {[...passwordList].map((password, index) => 
                        <PasswordMessage 
                        parent={this}
                        password={password} 
                        copyToClipboard={(index === passwordList.length - 1 && this.state.copyToClipboard) ? true : false}
                        />
                    )}
                    </div>
                </FormContainer>
                <DeleteConfirm 
                    open={this.state.deleteConfirmOpen}
                    onCancel={this.handleDeleteCancel}
                    onConfirm={this.handleDeleteConfirm}
                    content="Are you sure you want to delete this password? It will not be recoverable."
                />
            </Container>
        </StandardLayout>
    )
  }
}