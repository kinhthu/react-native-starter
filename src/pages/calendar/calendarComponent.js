import React, { Component } from 'react';

import {
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
    selectedEndDate: null,
  };

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2030, 6, 3);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

    return (
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday
          allowRangeSelection
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDateChange={this.onDateChange}
        />

        <View>
          <Text>SELECTED START DATE:{ startDate }</Text>
          <Text>SELECTED END DATE:{ endDate }</Text>
        </View>
      </View>
    );
  }
}

CalendarComponent.propTypes = {
  // onGetBooking: PropTypes.func.isRequired,
  // list: PropTypes.array,
};
