import React from 'react';
import { View, Text } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const ServiceItem = (props) => {
  const { name, price } = props;
  const { container, nameStyle, priceStyle } = styles;

  return (
    <View style={container}>
      <Text style={nameStyle}>Service: {name}</Text>
      <Text style={priceStyle}>Price: {price} VND</Text>
    </View>
  );
};

ServiceItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ServiceItem;
