import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React, { PropsWithChildren } from "react";
import colors from "../../../constants/colors";

interface IProps {
  handleToday: (event: GestureResponderEvent) => void;
}

const CalendarHeader = (props: PropsWithChildren<IProps>) => {
  const { children, handleToday } = props;

  return (
    <View className="flex-row justify-between items-center">
      <TouchableOpacity onPress={handleToday}>
        <Text style={styles.textBtn}>Today</Text>
      </TouchableOpacity>
      {children}
      <TouchableOpacity>
        <Text style={styles.textBtn}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CalendarHeader;

const styles = StyleSheet.create({
  textBtn: {
    ...colors.text.primary,
  },
});
