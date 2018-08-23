import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'native-base';

import CalendarPicker from 'react-native-calendar-picker';
// import PropTypes from 'prop-types';

// import { Loading, ServiceItem } from '../../components';
import styles from './styles';

export default class CalendarComponent extends Component {
  constructor(props) {
    super(props);
    this.onDateChange = this.onDateChange.bind(this);
  }

  state = {
    selectedStartDate: null,
  };

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const { container } = styles;
    // const { list } = this.props;
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />

        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>
      </View>
    );
  }
}

CalendarComponent.propTypes = {
  // onGetBooking: PropTypes.func.isRequired,
  // list: PropTypes.array,
};
