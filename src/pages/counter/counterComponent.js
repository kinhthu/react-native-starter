import React from 'react';
import Button from 'react-native-button';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CounterComponent = (props) => {
  const { container, buttons, button } = styles;
  const { count, onIncrease, onDecrease } = props;
  return (
    <View style={container}>
      <Text>Main Component</Text>
      <View style={buttons}>
        <Button style={button} onPress={() => { onIncrease(1); }}>Increase</Button>
        <Button style={button} onPress={() => { onDecrease(1); }}>Decrease</Button>
      </View>
      <Text> Count: {count}</Text>
    </View>
  );
};

CounterComponent.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};
export default CounterComponent;
