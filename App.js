import React, { Component } from 'react';
import StartScreen from './screens/StartScreen';
import ImageScreen from './screens/ImageScreen';
import ModalImage from './screens/modals/ModalImage';
import { StatusBar } from 'react-native';

StatusBar.setBarStyle('light-content');

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

const MainStack = createStackNavigator(
  {
    StartScreen: StartScreen,
    ImageScreen: ImageScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#388E3C'
    },
    headerTintColor: '#ffffff'
  }
});

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    ModalImage: {
      screen: ModalImage,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(RootStack);


