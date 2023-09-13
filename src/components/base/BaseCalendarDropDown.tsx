import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React from "react";
import colors from "../../constants/colors";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";
import fontSize from "../../constants/fontSize";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import routes from "../../constants/routes";

interface IProps {
  label?: string;
  customClassName?: string;
  items: { key: string; value: string }[];
  navigation: any;
}

const BaseCalendarDropDown = (props) => {
  const { label, navigation, customClassName, items } = props;
  const [expanded, setExpanded] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("");

  const heightValue = new Animated.Value(0);
  const rotateIcon = new Animated.Value(0);

  const toggleHeight = async (item) => {
    const initialValue = expanded ? items.length * 50 : 0;
    const finalValue = expanded ? 0 : items.length * 50;

    heightValue.setValue(initialValue);
    rotateIcon.setValue(expanded ? 1 : 0);

    Animated.timing(heightValue, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setExpanded(!expanded);
      setSelectedItem(item.key);
      navigateCalendar(navigation, item);
    });

    Animated.timing(rotateIcon, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const interpolatedRotate = rotateIcon.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const navigateCalendar = (navigation, item) => {
    switch (item.value) {
      case "Month":
        return navigation.navigate(routes.monthCalendar);
      case "Year":
        return navigation.navigate(routes.yearCalendar);
      case "Day":
        return navigation.navigate(routes.dayCalendar);
      default:
        return navigation.navigate(routes.monthCalendar);
    }
  };

  return (
    <>
      <TouchableOpacity
        className="mr-3 flex-row items-center justify-center"
        style={styles.container}
        onPress={toggleHeight}
      >
        <Text style={styles.label} className="mr-3">
          <Text>{selectedItem || items[0].key}</Text>
        </Text>
        <Animated.View style={{ transform: [{ rotate: interpolatedRotate }] }}>
          <ChevronDownIcon color="white" />
        </Animated.View>
      </TouchableOpacity>
      {/* menu */}
      <Animated.ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
        }}
        style={[
          {
            maxHeight: heightValue,
          },
          styles.menu,
        ]}
      >
        {items.map((item, i) => (
          <TouchableOpacity
            key={i}
            className="flex-1 items-center justify-center"
            style={styles.item}
            onPress={() => {
              toggleHeight(item);
            }}
          >
            <Text
              className="text-center"
              style={{ ...fontSize.xs, color: "white" }}
            >
              {item.key}
            </Text>
          </TouchableOpacity>
        ))}
      </Animated.ScrollView>
    </>
  );
};

export default BaseCalendarDropDown;

const styles = StyleSheet.create({
  container: {
    ...colors.bg.primary,
    height: 40,
    borderRadius: 25,
    paddingHorizontal: 15,
    position: "relative",
  },
  label: {
    color: "white",
  },
  menu: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: "gray",
    paddingHorizontal: 10,
    zIndex: 1000,
    position: "absolute",
    top: 45,
    right: 10,
    width: "100%",
  },
  item: {
    width: "100%",
    padding: 10,
  },
});
