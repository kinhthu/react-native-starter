import React, { Component } from 'react';
import {
  Container, Content, Button, Form, Item, Label, Input, Text, View,
} from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';
import { Loading } from '../../components';

export default class LoginComponent extends Component {
  render() {
    const {
      button, buttonContainer, form,
    } = styles;
    const { onLogin, isLogining } = this.props;
    return (
      <Container>
        <Content>
          <Loading loading={isLogining} />
          <Form style={form}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <View style={buttonContainer}>
              <Button style={button} success onPress={onLogin}>
                <Text> Log In </Text>
              </Button>
            </View>
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
