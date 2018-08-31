import React, { Component } from 'react';

import {
  Container, Content, List,
} from 'native-base';
import PropTypes from 'prop-types';

import { BookedItem } from '../../components';
import styles from './styles';

export default class BookingComponent extends Component {
  componentDidMount() {
    this.props.onGetBookedServices();
  }


  goToServiceDetail = (item) => {
    this.props.navigation.navigate('ServiceDetail', { item });
  }

  goToServiceDetail = (item) => {
    this.props.navigation.navigate('ServiceDetail', { item });
  }

  render() {
    const { container } = styles;
    const {
      list, onDeleteBooked,
    } = this.props;
    return (
      <Container style={container}>
        {/* <Loading loading={list.length === 0} /> */}
        <Content>
          <List
            dataArray={list}
            renderRow={item => (
              <BookedItem
                {...item.service}
                onEdit={() => onDeleteBooked(item.id)}
                onDelete={() => onDeleteBooked(item.id)}
              />
            )}
          />
        </Content>
      </Container>
    );
  }
}

BookingComponent.propTypes = {
  onGetBookedServices: PropTypes.func.isRequired,
  onDeleteBooked: PropTypes.func.isRequired,
  list: PropTypes.array,
};
