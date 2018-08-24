import React, { Component } from 'react';

import {
  Container, Header, Content, Button, Text, List, ListItem, View,
} from 'native-base';
import PropTypes from 'prop-types';
import { Linking } from 'react-native';
import { WebBrowser } from 'expo';

import PostItem from '../../components/postItem/postItem';
import styles from './styles';

export default class PostsComponent extends Component {
  openWithLinking = () => {
    Linking.openURL('https://expo.io');
  }

  openWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://expo.io');
  }

  render() {
    const { buttons, button } = styles;
    const { onGetPosts, posts } = this.props;
    return (
      <Container>
        <Header />
        <View style={buttons}>
          <Button style={button} success onPress={onGetPosts}>
            <Text> Get Posts </Text>
          </Button>

          <Button style={{}} onPress={this.openWithLinking}><Text>Open Web</Text></Button>
          <Button style={{}} onPress={this.openWithWebBrowser}><Text>Open Web 1</Text></Button>

        </View>
        <Content>
          <List
            dataArray={posts}
            renderRow={item => (
              <ListItem>
                <PostItem {...item} />
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

PostsComponent.propTypes = {
  onGetPosts: PropTypes.func.isRequired,
};
