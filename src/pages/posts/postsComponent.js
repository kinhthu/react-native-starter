import React from 'react';

import {
  Container, Header, Content, Button, Text, List, ListItem, View,
} from 'native-base';
import PropTypes from 'prop-types';

import PostItem from '../../components/postItem/postItem';
import styles from './styles';

const PostsComponent = (props) => {
  const { buttons, button } = styles;
  const { onGetPosts, posts } = props;
  return (
    <Container>
      <Header />
      <View style={buttons}>
        <Button style={button} success onPress={() => { onGetPosts(); }}>
          <Text> Get Posts </Text>
        </Button>
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
};

PostsComponent.propTypes = {
  onGetPosts: PropTypes.func.isRequired,
};
export default PostsComponent;
