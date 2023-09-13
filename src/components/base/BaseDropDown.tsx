import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import colors from "../../constants/colors";
import fontSize from "../../constants/fontSize";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";

interface IProps {
  placeholder?: string;
  label?: string;
  customClassName?: string;
  onChange: (item: { key: string; value: string }) => void;
  items: { key: string; value: string }[];
}

const BaseDropDown = (props: IProps) => {
  const { placeholder, label, onChange, customClassName, items } = props;
  const [expanded, setExpanded] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("");

  const heightValue = new Animated.Value(0);
  const rotateIcon = new Animated.Value(0);

  const toggleHeight = (item) => {
    const initialValue = expanded ? items.length * 50 : 0;
    const finalValue = expanded ? 0 : items.length * 50;

    heightValue.setValue(initialValue);
    rotateIcon.setValue(expanded ? 1 : 0);

    Animated.timing(heightValue, {
      toValue: finalValue,
      duration: 600,
      useNativeDriver: false,
    }).start(() => {
      setExpanded(!expanded);
      setSelectedItem(item.key);
    });

    Animated.timing(rotateIcon, {
      toValue: expanded ? 0 : 1,
      duration: 600,
      useNativeDriver: false,
    }).start();
  };

  const interpolatedRotate = rotateIcon.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View className={`relative ${customClassName}`}>
      {/* label */}
      <Text style={styles.label} className="pb-2 px-3">
        {label}
      </Text>
      {/* input */}
      <TouchableWithoutFeedback onPress={toggleHeight}>
        <View
          style={styles.input}
          className="flex-row justify-between items-center"
        >
          {selectedItem ? (
            <Text>{selectedItem}</Text>
          ) : (
            <Text style={{ color: "gray" }}>{placeholder}</Text>
          )}
          <TouchableOpacity onPress={toggleHeight}>
            <Animated.View
              style={{ transform: [{ rotate: interpolatedRotate }] }}
            >
              <ChevronDownIcon />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      {/* menu */}
      <Animated.ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
        }}
        style={[
          {
            height: heightValue,
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
              onChange(item);
            }}
          >
            <Text className="text-center" style={{ ...fontSize.xs }}>
              {item.key}
            </Text>
          </TouchableOpacity>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default React.memo(BaseDropDown);

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
    paddingRight: 16,
    height: 50,
  },
  menu: {
    marginTop: 10,
    borderRadius: 8,
    ...colors.bg.secondary,
    paddingHorizontal: 10,
  },
  item: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    borderBottomStyle: "solid",
  },
});
