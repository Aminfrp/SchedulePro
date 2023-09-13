import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface IProps {
  label: string;
}

const BaseCheckBox = (props: IProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
      <View style={[styles.checkbox, isChecked && styles.checkedBox]}></View>
      <Text>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: "#BDBDBD",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  checkedBox: {
    backgroundColor: "#1D7BE9",
  },
  checkmark: {
    color: "#fff",
    fontSize: 14,
  },
});

export default React.memo(BaseCheckBox);
