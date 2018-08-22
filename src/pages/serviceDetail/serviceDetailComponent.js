import React, { Component } from 'react';

import {
  Container, Card, CardItem, Body, Text,
  Content, Form, Picker, Icon, View, Button,
} from 'native-base';
import PropTypes from 'prop-types';

// import styles from './styles';

export default class ServiceDetailComponent extends Component {
  static navigationOptions = () => ({
    // title: navigation.state.params.item.name,
    title: 'Service Detail',
  });

  state = {
    selectedDoctor: undefined,
    selectedAppointment: undefined,
  };

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
              value={item.name}
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
              value={`key${index}`}
              key={index.toString()}
            />))}
        </Picker>
      </View>
    );
  }

  render() {
    // const { buttons, button } = styles;
    const {
      name, description, price, doctors,
    } = this.props.navigation.getParam('item');

    const currentTimeList = [];
    if (this.state.selectedDoctor) {
      const currentDoctor = doctors.find(d => d.name === this.state.selectedDoctor);
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
                  onPress={() => { this.props.navigation.pop(); }}
                >
                  <Text> Book </Text>
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
};
