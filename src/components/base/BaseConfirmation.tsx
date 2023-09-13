import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React, { useRef } from "react";
import colors from "../../constants/colors";
import fontSize from "../../constants/fontSize";

const BaseConfirmation = () => {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  const input5 = useRef(null);
  const input6 = useRef(null);
  return (
    <View>
      <Text>Enter your confirmation code </Text>
      <View className="flex-row gap-2" style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          ref={input1}
          placeholderTextColor={colors.text.input_text.color}
          onChangeText={(event) => {
            if (event) input2.current.focus();
          }}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          ref={input2}
          placeholderTextColor={colors.text.input_text.color}
          onChangeText={(event) => {
            if (event) input3.current.focus();
          }}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          ref={input3}
          placeholderTextColor={colors.text.input_text.color}
          onChangeText={(event) => {
            if (event) input4.current.focus();
          }}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholderTextColor={colors.text.input_text.color}
          maxLength={1}
          ref={input4}
          onChangeText={(event) => {
            if (event) input5.current.focus();
          }}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholderTextColor={colors.text.input_text.color}
          maxLength={1}
          ref={input5}
          onChangeText={(event) => {
            if (event) input6.current.focus();
          }}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholderTextColor={colors.text.input_text.color}
          maxLength={1}
          ref={input6}
          onChangeText={(event) => {
            if (event) input6.current.blur();
          }}
        />
      </View>
    </View>
  );
};

export default BaseConfirmation;
const styles = StyleSheet.create({
  input: {
    ...colors.bg.secondary,
    ...fontSize.sm,
    color: "black",
    borderRadius: 8,
    height: 50,
    flexGrow: 1,
    textAlign: "center",
  },
  inputsContainer: {
    paddingTop: 20,
    justifyContent: "space-between",
    flexGrow: 1,
  },
});
