import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    padding: 5,
  },
  titleStyle: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyStyle: {

  },
});

const PostItem = (props) => {
  const { title, body } = props;
  const { container, titleStyle, bodyStyle } = styles;

  return (
    <View style={container}>
      <Text style={titleStyle}>{title}</Text>
      <Text style={bodyStyle}>{body}</Text>
    </View>
  );
};

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostItem;
