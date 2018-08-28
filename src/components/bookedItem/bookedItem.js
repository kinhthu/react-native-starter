import React from 'react';
import {
  View, Text, CheckBox, SwipeRow, Button, Icon,
} from 'native-base';

import PropTypes from 'prop-types';

import styles from './styles';

const BookedItem = (props) => {
  const {
    name, price, booked, onChecking, id,
  } = props;
  const {
    container, nameStyle, priceStyle, buttons, button,
  } = styles;

  return (
    <View style={container}>
      <SwipeRow
        leftOpenValue={0}
        rightOpenValue={-160}
        body={(
          <View>
            <Text style={nameStyle}>Service: {name}</Text>
            <Text style={priceStyle}>Price: {price} VND</Text>
          </View>
)}
        right={(
          <View style={buttons}>
            <Button style={button} success onPress={() => alert('Edit')}>
              <Icon active name="brush" />
            </Button>
            <Button style={button} danger onPress={() => alert('Trash')}>
              <Icon active name="trash" />
            </Button>
          </View>
)}
      />
    </View>
  );
};

BookedItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  booked: PropTypes.bool,
  onChecking: PropTypes.func,
};

export default BookedItem;
