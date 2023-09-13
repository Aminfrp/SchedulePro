import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardTypeOptions,
  TouchableOpacity,
  Animated,
  Image,
  ActivityIndicator,
  Platform,
  Keyboard,
} from "react-native";
import React, { useEffect } from "react";
import colors from "../../constants/colors";
import fontSize from "../../constants/fontSize";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setFlags } from "../../store/country";
import { ScrollView } from "react-native-gesture-handler";

interface IProps {
  placeholder?: string;
  label?: string;
  customClassName?: string;
  type?: KeyboardTypeOptions;
  onChange: (text: string) => void;
  password?: boolean;
}

const BasePhonePicker = (props: IProps) => {
  const { placeholder, label, onChange, customClassName } = props;

  const flags = useSelector((state: RootState) => state.countries.flags);
  const dispatch = useDispatch();

  const [expanded, setExpanded] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<null | {
    name: string;
    flag: string;
  }>(null);

  const heightValue = new Animated.Value(0);
  const rotateIcon = new Animated.Value(0);

  const toggleHeight = (item = null) => {
    const initialValue = expanded ? 200 : 0;
    const finalValue = expanded ? 0 : 200;

    heightValue.setValue(initialValue);
    rotateIcon.setValue(expanded ? 1 : 0);

    Animated.timing(heightValue, {
      toValue: finalValue,
      duration: 600,
      useNativeDriver: false,
    }).start(() => {
      setSelectedItem(item);
    });

    Animated.timing(rotateIcon, {
      toValue: expanded ? 0 : 1,
      duration: 600,
      useNativeDriver: false,
    }).start(() => {
      setExpanded(!expanded);
    });
  };

  const interpolatedRotate = rotateIcon.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const getCountries = async () => {
    if (!flags.length) {
      setLoading(true);
      const countriesApi = await fetch(
        "https://restcountries.com/v3.1/all"
      ).then((data) => data.json());
      const flags = countriesApi.map((country) => ({
        flag: country.flags.png,
        name: country.cca2,
      }));
      dispatch(setFlags({ flags }));
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <View
      className={`relative ${customClassName}`}
      style={{
        zIndex: 100,
      }}
    >
      <Text style={styles.label} className="pb-2 px-3">
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          selectedItem ? { paddingLeft: 70 } : { paddingLeft: 40 },
        ]}
        placeholder={placeholder}
        keyboardType={"numeric"}
        onChangeText={onChange}
        placeholderTextColor={colors.text.input_text.color}
        aria-disabled={loading}
      />
      <View className="relative">
        {loading ? (
          <ActivityIndicator
            style={{ position: "absolute", bottom: 15, left: 15 }}
            color={colors.bg.primary.backgroundColor}
          />
        ) : (
          <TouchableOpacity
            className="flex-row gap-2 items-center justify-end"
            style={styles.countries}
            onPress={(e) => {
              Keyboard.dismiss();
              toggleHeight();
              e.preventDefault();
            }}
          >
            <Animated.View
              style={{
                transform: [{ rotate: interpolatedRotate }],
                marginRight: "auto",
              }}
            >
              <ChevronDownIcon />
            </Animated.View>
            {selectedItem ? (
              <Image
                source={{ uri: selectedItem.flag }}
                style={{ width: 25, height: 16 }}
              ></Image>
            ) : null}
          </TouchableOpacity>
        )}
      </View>
      <Animated.View style={[styles.menu, { height: heightValue }]}>
        <ScrollView
          contentContainerStyle={{
            padding: 10,
            zIndex: 2,
          }}
          showsVerticalScrollIndicator={false}
        >
          {flags.map((flagInfo, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  toggleHeight(flagInfo);
                }}
                className="flex-row justify-between items-center py-2"
                style={
                  i + 1 !== flags.length && {
                    borderColor: "white",
                    borderStyle: "solid",
                    borderBottomWidth: 2,
                  }
                }
              >
                <Image
                  source={{ uri: flagInfo.flag }}
                  style={{ width: 25, height: 16 }}
                ></Image>
                <Text style={{ fontSize: 12, textAlign: "left", width: "40%" }}>
                  {flagInfo.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default React.memo(BasePhonePicker);

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
    paddingRight: 60,
    height: 50,
  },
  countries: {
    position: "absolute",
    bottom: 3,
    left: 10,
    height: 50,
    justifyContent: "center",
  },
  menu: {
    zIndex: 100,
    position: "absolute",
    top: 80,
    left: 0,
    width: 80,
    ...colors.bg.secondary,
    borderRadius: 8,
    elevation: Platform.OS === "ios" ? 0 : 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});
