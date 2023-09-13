import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import BusinessSearch from "../components/specific/home/BusinessSearch";

const SearchOnMapScreen = () => {
  return (
    <SafeAreaView className="flex-1" style={styles.container}>
      <View style={styles.search}>
        <BusinessSearch customStyle={{ backgroundColor: "#FFFFFF" }} />
      </View>
      <MapView style={styles.map} />
    </SafeAreaView>
  );
};

export default SearchOnMapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  search: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    width: "100%",
    padding: 15,
    marginTop: 50,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
