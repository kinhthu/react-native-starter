import React from 'react';
import { View, Text } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

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
