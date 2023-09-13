import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import fontSize from "../../../constants/fontSize";

interface IProps {
  items: any[];
}
const JobsCategorySlider = (props: IProps) => {
  const { items } = props;

  return (
    <SafeAreaView>
      <FlatList
        data={items}
        horizontal
        keyExtractor={(e, i) => "dom" + i.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.categoryImage}
            ></Image>
            <Text style={styles.categoryName}>{item.jobName}</Text>
          </View>
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default JobsCategorySlider;

const styles = StyleSheet.create({
  categoryContainer: {
    marginHorizontal: 5,
    alignItems: "center",
    width: 80,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  categoryName: {
    marginTop: 10,
    ...fontSize.sm,
    textAlign: "center",
  },
});
