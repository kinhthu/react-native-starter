import React from 'react';
import {
  View, Spinner, Text,
} from 'native-base';

import PropTypes from 'prop-types';
import styles from './styles';

const Loading = (props) => {
  const { overlay } = styles;
  const { text } = props;
  return (
    <View style={overlay}>
      <Spinner color="white" />
      <Text>{text}</Text>
    </View>
  );
};

Loading.propTypes = {
  text: PropTypes.string,
};

export default Loading;
