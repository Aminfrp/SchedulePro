import { StyleSheet, TextInput, View, Dimensions } from "react-native";
import React from "react";
import TimeIcon from "../../assets/icons/search/TimeIcon";

interface IProps {
  customClassName?: string;
}

const BaseTimepick = (props: IProps) => {
  const { customClassName } = props;
  return (
    <View style={styles.container} className={customClassName}>
      <TextInput style={styles.input} placeholder="Time"></TextInput>
      <View style={styles.searchIcon}>
        <TimeIcon />
      </View>
    </View>
  );
};

export default BaseTimepick;

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
