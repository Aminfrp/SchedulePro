import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import BaseCheckBox from "../../base/BaseCheckBox";
import BaseButton from "../../base/BaseButton";

const FilterSearchDrawer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text className="font-bold">Filter</Text>
      </View>
      <Text className="font-bold py-5">Business Category</Text>
      <View className="py-2">
        <BaseCheckBox label="All" />
      </View>
      <View className="py-2">
        <BaseCheckBox label="Restaurant" />
      </View>
      <View className="py-2">
        <BaseCheckBox label="Spa" />
      </View>

      <Text className="font-bold py-5">Business Rated</Text>
      <View className="py-2">
        <BaseCheckBox label="Any rating" />
      </View>
      <View className="py-2">
        <BaseCheckBox label="5 Stars" />
      </View>
      <View className="py-2">
        <BaseCheckBox label="4 Stars" />
      </View>
      <View className="py-2">
        <BaseCheckBox label="3 Stars" />
      </View>
      <View className="py-2">
        <BaseCheckBox label="2 Stars" />
      </View>
      <View className="py-2">
        <BaseCheckBox label="1 Stars" />
      </View>
      <View className="flex-row justify-between mt-auto mb-3">
        <BaseButton
          btnStyle={{ paddingHorizontal: 10, borderColor: "#ED4747" }}
          outlined
          pressHandle={function (event: GestureResponderEvent): void {}}
        >
          <Text style={{ color: "#ED4747" }}>Clear Filter</Text>
        </BaseButton>
        <BaseButton
          outlined
          pressHandle={function (event: GestureResponderEvent): void {}}
          btnStyle={{ paddingHorizontal: 10, borderColor: "#1D7BE9" }}
        >
          <Text style={{ color: "#1D7BE9" }}>Apply Changes</Text>
        </BaseButton>
      </View>
    </SafeAreaView>
  );
};

export default FilterSearchDrawer;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  title: {
    borderBottomColor: "#DADADA",
    borderStyle: "solid",
    borderBottomWidth: 0.5,
    paddingBottom: 20,
  },
});
