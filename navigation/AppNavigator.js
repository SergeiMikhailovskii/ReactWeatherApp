import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthorizationScreen from "../screens/AuthorizationScreen";
import HomeScreen from "../screens/HomeScreen";

export default createAppContainer(
  createSwitchNavigator({
    AuthorizationScreen: AuthorizationScreen,
    HomeScreen: HomeScreen
  })
);
