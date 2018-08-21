import React, { Component } from 'react';

import {
  Container, Header, Content, Button, Form, Item, Label, Input, Text, View, Spinner,
} from 'native-base';

import PropTypes from 'prop-types';

import styles from './styles';

export default class LoginComponent extends Component {
  render() {
    const { button, buttonContainer } = styles;
    const { onLogin, isLogining } = this.props;
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <View style={buttonContainer}>
              <Button style={button} success onPress={() => { onLogin(); }}>
                <Text> Log In </Text>
              </Button>
            </View>
            {isLogining && <Spinner color="green" />}
          </Form>
        </Content>
      </Container>
    );
  }
}

LoginComponent.propTypes = {
  onLogin: PropTypes.func.isRequired,
  isLogining: PropTypes.bool.isRequired,
};
