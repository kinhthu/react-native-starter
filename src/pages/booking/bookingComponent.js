import React, { Component } from 'react';

import {
  Container, Content, List, ListItem,
} from 'native-base';
import PropTypes from 'prop-types';

import { Loading, ServiceItem } from '../../components';
// import styles from './styles';

export default class BookingComponent extends Component {
  componentDidMount() {
    this.props.onGetBooking();
  }

  goToServiceDetail = (item) => {
    this.props.navigation.navigate('ServiceDetail', { item });
  }

  render() {
    // const { buttons, button } = styles;
    const { list } = this.props;
    return (
      <Container>
        <Loading loading={list.length === 0} />
        <Content>
          <List
            dataArray={list}
            renderRow={item => (
              <ListItem onPress={() => this.goToServiceDetail(item)}>
                <ServiceItem {...item} />
              </ListItem>
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
