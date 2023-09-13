import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  ViewStyle,
  StyleProp,
} from "react-native";
import React from "react";
import SearchIcon from "../../../assets/icons/SearchIcon";

interface IProps {
  customStyle?: StyleProp<ViewStyle>;
}

const BusinessSearch = (props: IProps) => {
  const { customStyle } = props;
  return (
    <View style={[styles.container, customStyle]}>
      <TextInput
        style={styles.input}
        placeholder="Search Location/ Business"
      ></TextInput>
      <View style={styles.searchIcon}>
        <SearchIcon />
      </View>
    </View>
  );
};

export default BusinessSearch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E4E4E736",
    height: 48,
    borderRadius: 25,
    paddingLeft: Dimensions.get("window").width * 0.15,
    position: "relative",
    flexDirection: "row",
  },
  input: {},
  searchIcon: {
    position: "absolute",
    top: 15,
    left: 20,
  },
});
