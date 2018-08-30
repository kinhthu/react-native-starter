import React, { Component } from 'react';

import {
  Container, Content, List, ListItem, View, Text, Button,
} from 'native-base';
import PropTypes from 'prop-types';

import { Loading, ServiceItem } from '../../components';
import styles from './styles';

export default class BookingComponent extends Component {
  componentDidMount() {
    this.props.onGetServices();
  }

  goToServiceDetail = (item) => {
    this.props.navigation.navigate('ServiceDetail', { item });
  }

  onBookAllService = () => {
    const data = this.props.list.filter(i => i.booked);
    this.props.onBookServices(data);
  }

  render() {
    const { costStype, bookStyle, button } = styles;
    const {
      list, totalCost, isLoading, onSelectService,
    } = this.props;
    return (
      <Container>
        <Loading loading={list.length === 0} />
        <Content>
          <List
            dataArray={list}
            renderRow={item => (
              <ListItem onPress={() => this.goToServiceDetail(item)}>
                <ServiceItem {...item} onChecking={onSelectService} />
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
  onGetServices: PropTypes.func.isRequired,
  onBookServices: PropTypes.func.isRequired,
  list: PropTypes.array,
};
