import React, { Component } from 'react';

import {
  Container, Content, List, ListItem, View, Text, Button,
} from 'native-base';
import PropTypes from 'prop-types';

import { Loading, ServiceItem } from '../../components';
import styles from './styles';

export default class BookingComponent extends Component {
  componentDidMount() {
    this.props.onGetBooking();
  }

  goToServiceDetail = (item) => {
    this.props.navigation.navigate('ServiceDetail', { item });
  }

  onBookAllService = () => {
    console.log('Book all service!');
  }

  render() {
    const { costStype, bookStyle, button } = styles;
    const {
      list, totalCost, isLoading, onBookService,
    } = this.props;
    return (
      <Container>
        <Loading loading={list.length === 0} />
        <Content>
          <List
            dataArray={list}
            renderRow={item => (
              <ListItem onPress={() => this.goToServiceDetail(item)}>
                <ServiceItem {...item} onChecking={onBookService} />
              </ListItem>
            )}
          />
        </Content>
        {!isLoading && (
          <View>
            <View style={costStype}>
              <Text>Total Cost: {totalCost}</Text>
            </View>
            <View style={bookStyle}>
              <Button
                style={button}
                success
                block
                disabled={totalCost === 0}
                onPress={this.onBookAllService}
              >
                <Text> Book </Text>
              </Button>
            </View>
          </View>
        )}
      </Container>
    );
  }
}

BookingComponent.propTypes = {
  onGetBooking: PropTypes.func.isRequired,
  list: PropTypes.array,
};
