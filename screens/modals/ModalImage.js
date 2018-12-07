import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

class ModalImage extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
          <Image 
            style={{ height: 700, width: 400 }}
            source={{ uri: this.props.navigation.getParam('source') }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ModalImage;