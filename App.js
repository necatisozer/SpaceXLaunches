import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

// import the different screens
import Loading from "./Loading";
import SignUp from "./SignUp";
import Login from "./Login";
import Main from "./Main";

const AppNavigator = createSwitchNavigator({
  Loading: Loading,
  SignUp: SignUp,
  Login: Login,
  Main: Main,
});

export default createAppContainer(AppNavigator);
