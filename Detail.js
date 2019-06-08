import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default class Detail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("item").mission_name
    };
  };

  render() {
    const item = this.props.navigation.getParam("item");

    return (
      <View>
        <ScrollView style={styles.card} showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.image}
              source={require("./assets/rocket.png")}
            />
            <Text style={{ fontSize: 16, margin: 5, fontWeight: "bold" }}>
              {item.launch_date_utc}
            </Text>
          </View>
          <View style={{ margin: 10, marginBottom: 0 }}>
            <Text style={{ flex: 0.2, fontSize: 16, fontWeight: "bold" }}>
              Details:
            </Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ flexWrap: "wrap", flex: 0.8 }}>{item.details}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 16, margin: 10, fontWeight: "bold" }}>
              ROCKET
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Model</Text>
            <Text style={{ flex: 0.5 }}>{item.rocket.rocket_name}</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Static fire</Text>
            <Text style={{ flex: 0.5 }}>{item.static_fire_date_utc}</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Launch window</Text>
            <Text style={{ flex: 0.5 }}>{item.launch_window}</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>
              Launch success
            </Text>
            <Text style={{ flex: 0.5 }}>
              {item.launch_success != null
                ? item.launch_success.toString()
                : null}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Core Serial</Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.first_stage.cores[0].core_serial}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Model</Text>
            <Text style={{ flex: 0.5 }}>
              Block {item.rocket.first_stage.cores[0].block}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Reused</Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.first_stage.cores[0].reused != null
                ? item.rocket.first_stage.cores[0].reused.toString()
                : null}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Landing zone</Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.first_stage.cores[0].landing_vehicle}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>
              Landing success
            </Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.first_stage.cores[0].landing_success != null
                ? item.rocket.first_stage.cores[0].landing_success.toString()
                : null}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Landing legs</Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.first_stage.cores[0].legs != null
                ? item.rocket.first_stage.cores[0].legs.toString()
                : null}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Gridfins</Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.first_stage.cores[0].gridfins != null
                ? item.rocket.first_stage.cores[0].gridfins.toString()
                : null}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 16, margin: 10, fontWeight: "bold" }}>
              PAYLOAD
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Second Stage</Text>
            <Text style={{ flex: 0.5 }}>
              Block {item.rocket.second_stage.block}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>
              Fairings Reused
            </Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.fairings.reused != null
                ? item.rocket.fairings.reused.toString()
                : null}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>
              Recovery Attempt
            </Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.fairings.recovery_attempt != null
                ? item.rocket.fairings.recovery_attempt.toString()
                : null}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Name</Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.second_stage.payloads[0].payload_id}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Manufacturer</Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.second_stage.payloads[0].manufacturer}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Customer</Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.second_stage.payloads[0].customers.join(", ")}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Nationality</Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.second_stage.payloads[0].nationality}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Weight</Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.second_stage.payloads[0].payload_mass_kg} kg
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Orbit</Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.second_stage.payloads[0].orbit}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Regime</Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.second_stage.payloads[0].orbit_params.regime}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Periapsis</Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.second_stage.payloads[0].orbit_params.periapsis_km}{" "}
              km
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Apoapsis</Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.second_stage.payloads[0].orbit_params.apoapsis_km} km
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Inclination</Text>
            <Text style={{ flex: 0.5 }}>
              {
                item.rocket.second_stage.payloads[0].orbit_params
                  .inclination_deg
              }{" "}
              °
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5, fontWeight: "bold" }}>Period</Text>
            <Text style={{ flex: 0.5 }}>
              {item.rocket.second_stage.payloads[0].orbit_params.period_min} min
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "white",
    elevation: 10
  },
  image: { width: 160, height: 160, marginLeft: 5, margin: 20 }
});
