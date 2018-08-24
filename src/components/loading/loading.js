import React from 'react';
import {
  View, Modal, ActivityIndicator,
} from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles';

const Loading = (props) => {
  const { modalBackground, activityIndicatorWrapper } = styles;
  const { loading } = props;
  return (
    <Modal
      transparent
      animationType="none"
      visible={loading}
      onRequestClose={() => {}}
    >
      <View style={modalBackground}>
        <View style={activityIndicatorWrapper}>
          <ActivityIndicator
            animating={loading}
            size="large"
          />
        </View>
      </View>
    </Modal>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool,
};

export default Loading;
