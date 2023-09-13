import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardTypeOptions,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../../constants/colors";
import fontSize from "../../constants/fontSize";

interface IProps {
  placeholder?: string;
  label?: string;
  customClassName?: string;
  type?: KeyboardTypeOptions;
  onChange: (text: string) => void;
  password?: boolean;
}

const BaseTextField = (props: IProps) => {
  const {
    placeholder,
    label,
    onChange,
    type = "default",
    customClassName,
    password = false,
  } = props;

  const [secure, setSecure] = React.useState(false);
  return (
    <View className={`relative ${customClassName}`}>
      <Text style={styles.label} className="pb-2 px-3">
        {label}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type}
        onChangeText={(value) => onChange(value)}
        placeholderTextColor={colors.text.input_text.color}
        secureTextEntry={secure}
      />
      {password ? (
        <TouchableOpacity
          style={styles.showPassword}
          onPress={() => setSecure(!secure)}
        >
          <Text style={styles.showPasswordText}>Show</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default React.memo(BaseTextField);

const styles = StyleSheet.create({
  label: {
    ...fontSize.sm,
    ...colors.text.light_text,
  },
  input: {
    ...colors.bg.secondary,
    ...fontSize.sm,
    color: "black",
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 60,
    height: 50,
  },
  showPassword: {
    position: "absolute",
    right: 20,
    top: 40,
  },
  showPasswordText: {
    ...colors.text.primary,
  },
});
