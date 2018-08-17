import React from 'react';
import Button from 'react-native-button';
import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';

import PostItem from './postItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
  },
});

const PostsComponent = (props) => {
  const { container, buttons, button } = styles;
  const { onGetPosts, posts } = props;
  return (
    <View style={container}>
      <Text>Post Component</Text>
      <View style={buttons}>
        <Button style={button} onPress={() => { onGetPosts(); }}>Get Posts</Button>
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostItem {...item} />}
      />
    </View>
  );
};

PostsComponent.propTypes = {
  onGetPosts: PropTypes.func.isRequired,
};
export default PostsComponent;
