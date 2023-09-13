import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { memo } from "react";
import colors from "../../constants/colors";
import { TextStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps {
  text: string;
  customClassName?: string;
  variant?: "default" | "outline" | "disabled";
  handlePress?: ((event: GestureResponderEvent) => void) & (() => void);
}

const BaseChips = (props: IProps) => {
  const { text, variant = "default", handlePress, customClassName } = props;

  const defineBgStyle = (): StyleProp<ViewStyle> => {
    switch (variant) {
      case "outline":
        return {
          borderColor: colors.bg.primary.backgroundColor,
          borderWidth: 1,
          borderStyle: "solid",
        };
      case "disabled":
        return {
          borderColor: "#0000001A",
          borderWidth: 1,
          borderStyle: "solid",
          backgroundColor: "#F5F5F5",
        };
      case "default":
        return {
          ...colors.bg.primary,
        };
    }
  };

  const defineTextStyle = (): StyleProp<TextStyle> => {
    switch (variant) {
      case "outline":
        return {
          ...colors.text.primary,
        };
      case "disabled":
        return {
          color: "#0000001A",
        };
      case "default":
        return {
          color: "white",
        };
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, defineBgStyle()]}
      disabled={variant === "disabled"}
      onPress={handlePress}
      className={customClassName}
    >
      <Text className="text-center" style={defineTextStyle()}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(BaseChips);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
  },
});
