import React from "react";
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Button
} from "react-native";
import firebase from "react-native-firebase";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null, isLoading: true };
  }

  static navigationOptions = {
    headerTitle: "SpaceX Launches",
    headerRight: (
      <Text
        style={{ fontSize: 17, fontWeight: "bold" }}
        onPress={() => {
          firebase
            .auth()
            .signOut()
            .then(() => this.props.navigation.navigate("Login"))
            .catch(error => this.setState({ errorMessage: error.message }));
        }}
      >
        Logout{"   "}
      </Text>
    )
  };

  componentDidMount() {
    const { currentUser } = firebase.auth();

    this.setState({ currentUser });

    return fetch("https://api.spacexdata.com/v3/launches/upcoming")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { currentUser } = this.state;

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View>
            {this.state.dataSource.map(function(obj, i) {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("Detail", {
                      flight_number: obj.flight_number,
                      mission_name: obj.mission_name
                    })
                  }
                  key={i}
                  style={{ margin: 10, marginBottom: 5 }}
                >
                  <View style={styles.card}>
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        style={styles.image}
                        source={require("./assets/rocket.png")}
                      />
                      <View style={{ flexDirection: "column" }}>
                        <Text
                          numberOfLines={3}
                          style={{ fontSize: 17, fontWeight: "bold" }}
                        >
                          {obj.mission_name}
                        </Text>
                        <View style={styles.row}>
                          <Text>{obj.launch_date_utc}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.line} />
                </TouchableOpacity>
              );
            }, this)}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  card: { margin: 10, elevation: 5 },
  image: { width: 50, height: 50, marginLeft: 5, marginRight: 20 },
  row: { flexDirection: "row", marginTop: 10 },
  line: { height: 2, marginTop: 10, backgroundColor: "#EDEDED" }
});
