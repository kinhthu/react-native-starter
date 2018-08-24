import React, { Component } from 'react';

import {
  Text, View, TouchableOpacity,
} from 'react-native';
import { Camera, Permissions } from 'expo';
// import PropTypes from 'prop-types';

// import { Loading, ServiceItem } from '../../components';
// import styles from './styles';

export default class CameraComponent extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    if (this.camera) {
      const photo = await this.camera.takePictureAsync();
      console.log(photo);
    }
  };

  render() {
    const { hasCameraPermission, type } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={this.state.type} ref={(ref) => { this.camera = ref; }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                this.setState({
                  type: type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
                });
              }}
            >
              <Text
                style={{ fontSize: 18, marginBottom: 10, color: 'white' }}
              >
                {' '}Flip{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ justifyContent: 'flex-end', marginLeft: 100 }}
              onPress={this.snap}
            >
              <Text style={{ color: 'white' }}>snap pic</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}

CameraComponent.propTypes = {
  // onGetBooking: PropTypes.func.isRequired,
  // list: PropTypes.array,
};
