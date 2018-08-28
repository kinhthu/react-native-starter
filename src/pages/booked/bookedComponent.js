import React, { Component } from 'react';

import {
  Container, Content, List,
} from 'native-base';
import PropTypes from 'prop-types';

import { Loading, BookedItem } from '../../components';
import styles from './styles';

export default class BookingComponent extends Component {
  componentDidMount() {
    this.props.onGetBooking();
  }

  goToServiceDetail = (item) => {
    this.props.navigation.navigate('ServiceDetail', { item });
  }

  render() {
    const { container } = styles;
    const {
      list,
    } = this.props;
    return (
      <Container style={container}>
        <Loading loading={list.length === 0} />
        <Content scrollEnabled={false}>
          <List
            dataArray={list}
            renderRow={item => (
              <BookedItem {...item} />
            )}
          />
        </Content>
      </Container>
    );
  }
}

BookingComponent.propTypes = {
  onGetBooking: PropTypes.func.isRequired,
  list: PropTypes.array,
};
