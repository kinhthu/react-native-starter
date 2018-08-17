import React from 'react';
import Button from 'react-native-button';
import {
  View, Text, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';

import PostItem from '../../components/postItem/postItem';
import styles from './styles';

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
