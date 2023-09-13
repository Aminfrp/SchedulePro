import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import fontSize from "../../../constants/fontSize";
import colors from "../../../constants/colors";

interface IProps {
  items: any[];
}

const BusinessFilter = (props: IProps) => {
  const { items } = props;
  const [filteredItems, setFilterdItems] = React.useState<number[]>([]);

  const addFilter = (index) => {
    if (filteredItems.includes(index)) {
      setFilterdItems((prevState) =>
        prevState.filter((item) => item !== index)
      );
    } else setFilterdItems((prevState) => [...prevState, index]);
  };

  return (
    <SafeAreaView className="mb-4">
      <FlatList
        data={items}
        horizontal
        keyExtractor={(e, i) => "dom" + i.toString()}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={({ item, index }) => (
          <BusinessFilterItem
            index={index}
            label={item.jobName}
            selectFilter={(i) => addFilter(i)}
            filteredItems={filteredItems}
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

interface IBusinessItemProps {
  label: string;
  index: number;
  selectFilter: (index: number) => void;
  filteredItems: number[];
}

const BusinessFilterItem = (props: IBusinessItemProps) => {
  const { index, label, selectFilter, filteredItems } = props;
  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        {
          backgroundColor: filteredItems.includes(index)
            ? colors.bg.primary.backgroundColor
            : "#DADADA",
        },
      ]}
      onPress={() => selectFilter(index)}
    >
      <Text style={styles.itemLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default BusinessFilter;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderRadius: 10,
  },
  itemLabel: {
    color: "white",
    ...fontSize.sm,
  },
});
