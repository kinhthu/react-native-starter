import React from 'react';

import {
  Container, Header, Content, Button, Text, Footer, FooterTab,
} from 'native-base';
// import PropTypes from 'prop-types';

// import PostItem from '../../components/postItem/postItem';
// import styles from './styles';

const MainComponent = () => (
  <Container>
    <Header />
    <Content />
    <Footer>
      <FooterTab>
        <Button vertical active>
          {/* <Icon name="apps" /> */}
          <Text>Apps</Text>
        </Button>
        <Button vertical>
          {/* <Icon name="camera" /> */}
          <Text>Camera</Text>
        </Button>
        <Button vertical>
          {/* <Icon active name="navigate" /> */}
          <Text>Navigate</Text>
        </Button>
        <Button vertical>
          {/* <Icon name="person" /> */}
          <Text>Contact</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
);
MainComponent.propTypes = {
};
export default MainComponent;
