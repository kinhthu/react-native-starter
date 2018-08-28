import React, { Component } from 'react';

import {
  Text, View, Fab, Icon,
} from 'native-base';

import CalendarPicker from 'react-native-calendar-picker';
// import PropTypes from 'prop-types';

// import { Loading, ServiceItem } from '../../components';
import styles from './styles';

export default class CalendarComponent extends Component {
  state = {
    selectedStartDate: null,
    selectedEndDate: null,
  };

  onDateChange = (date, type) => {
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
    const { selectedStartDate, selectedEndDate, active } = this.state;
    const { fabButton, container } = styles;
    const minDate = new Date(); // Today
    const maxDate = new Date(2030, 6, 3);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

    return (
      <View style={container}>
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
        <View style={fabButton}>
          <Fab
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => { alert('Add!'); }}
          >
            <Icon name="add" style={{ fontSize: 40, padding: 20 }} />
          </Fab>
        </View>
      </View>
    );
  }
}

CalendarComponent.propTypes = {
  // onGetBooking: PropTypes.func.isRequired,
  // list: PropTypes.array,
};
