import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default class Detail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("mission_name", "SpaceX Launches")
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
