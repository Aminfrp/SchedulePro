import { StyleSheet, TextInput, View, Dimensions } from "react-native";
import React from "react";
import DateIcon from "../../assets/icons/search/DateIcon";

interface IProps {
  customClassName?: string;
}

const BaseDatepicker = (props: IProps) => {
  const { customClassName } = props;

  return (
    <View style={styles.container} className={customClassName}>
      <TextInput style={styles.input} placeholder="Date"></TextInput>
      <View style={styles.searchIcon}>
        <DateIcon />
      </View>
    </View>
  );
};

export default BaseDatepicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E4E4E736",
    height: 48,
    borderRadius: 25,
    paddingLeft: Dimensions.get("window").width * 0.15,
    position: "relative",
    flexDirection: "row",
    width: "100%",
    flex: 1,
  },
  input: {},
  searchIcon: {
    position: "absolute",
    top: 15,
    left: 20,
  },
});
