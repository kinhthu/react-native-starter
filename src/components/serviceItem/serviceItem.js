import React from 'react';
import { View, Text, CheckBox } from 'native-base';

import PropTypes from 'prop-types';

import styles from './styles';

const ServiceItem = (props) => {
  const {
    name, price, booked, onChecking, id,
  } = props;
  const {
    container, nameStyle, priceStyle, checkBox,
  } = styles;

  return (
    <View style={container}>
      <View>
        <Text style={nameStyle}>Service: {name}</Text>
        <Text style={priceStyle}>Price: {price} VND</Text>
      </View>
      <View style={checkBox}>
        <CheckBox onPress={() => onChecking({ id })} checked={booked} />
      </View>
    </View>
  );
};

ServiceItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  booked: PropTypes.bool,
  onChecking: PropTypes.func,
};

export default ServiceItem;
