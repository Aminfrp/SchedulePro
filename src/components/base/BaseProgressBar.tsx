import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

interface IProps {
  value: number;
}

const BaseProgressBar = (props: IProps) => {
  const { value } = props;
  return (
    <View style={styles.container}>
      <View
        style={[styles.progress, { width: (100 * value) / 5 + "%" }]}
      ></View>
    </View>
  );
};

export default BaseProgressBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    width: "100%",
    height: 10,
    borderRadius: 10,
    position: "relative",
  },
  progress: {
    ...colors.bg.primary,
    position: "absolute",
    height: 10,
    borderRadius: 10,
  },
});
