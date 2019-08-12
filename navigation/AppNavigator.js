import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthorizationScreen from '../screens/AuthorizationScreen';

export default createAppContainer(
  createSwitchNavigator({
    AuthorizationScreen: AuthorizationScreen,
  })
);
