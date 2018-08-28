import React, { Component } from 'react';

import {
  Container, Card, CardItem, Body, Text,
  Content, Form, Picker, Icon, View, Button,
} from 'native-base';
import PropTypes from 'prop-types';

// import styles from './styles';

export default class ServiceDetailComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDoctor: undefined,
      selectedAppointment: undefined,
    };
  }

  componentDidMount() {
    const {
      doctor, appointment,
    } = this.props.navigation.getParam('item');
    if (doctor && appointment) {
      this.setState({
        selectedDoctor: doctor,
        selectedAppointment: appointment,
      });
    }
  }

  onValueChangeDoctor(value) {
    this.setState({
      selectedDoctor: value,
    });
  }

  onValueChangeDatetime(value) {
    this.setState({
      selectedAppointment: value,
    });
  }

  onBookService = (id, selectedDoctor, selectedAppointment) => {
    const { onBookService, navigation } = this.props;

    onBookService({ id, selectedDoctor, selectedAppointment });
    navigation.pop();
  }

  renderSelectDoctor(doctors) {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text>Doctor: </Text>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="ios-arrow-down-outline" />}
          placeholder="Select Doctor"
          placeholderStyle={{ color: '#bfc6ea' }}
          placeholderIconColor="#007aff"
          style={{ width: undefined }}
          selectedValue={this.state.selectedDoctor}
          onValueChange={value => this.onValueChangeDoctor(value)}
        >
          {doctors.map((item, index) => (
            <Picker.Item
              label={item.name}
              value={item.id}
              key={index.toString()}
            />))}
        </Picker>
      </View>
    );
  }

  renderSelectAppointment(available) {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text>Appointment: </Text>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="ios-arrow-down-outline" />}
          placeholder="Select Appointment"
          placeholderStyle={{ color: '#bfc6ea' }}
          placeholderIconColor="#007aff"
          style={{ width: undefined }}
          selectedValue={this.state.selectedAppointment}
          onValueChange={value => this.onValueChangeDatetime(value)}
        >
          {available.map((item, index) => (
            <Picker.Item
              label={`${item.start} - ${item.end}`}
              value={item.id}
              key={index.toString()}
            />))}
        </Picker>
      </View>
    );
  }

  render() {
    // const { buttons, button } = styles;
    const {
      name, description, price, doctors, id,
    } = this.props.navigation.getParam('item');
    const { selectedAppointment, selectedDoctor } = this.state;

    const currentTimeList = [];
    if (selectedDoctor) {
      const currentDoctor = doctors.find(d => d.id === selectedDoctor);
      if (currentDoctor) {
        currentTimeList.push(...currentDoctor.available);
      }
    }

    return (
      <Container>
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>Service: {name}</Text>
                <Text>Description: {description}</Text>
                <Text>Price: {price}</Text>
                <Form>
                  {this.renderSelectDoctor(doctors)}
                  {this.state.selectedDoctor && this.renderSelectAppointment(currentTimeList)}
                </Form>
                <Button
                  success
                  block
                  disabled={!this.state.selectedAppointment}
                  onPress={() => { this.onBookService(id, selectedDoctor, selectedAppointment); }}
                >
                  <Text> Select </Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

ServiceDetailComponent.propTypes = {
  // onGetBooking: PropTypes.func.isRequired,
  // list: PropTypes.array,
  navigation: PropTypes.object,
  onBookService: PropTypes.func,
};
