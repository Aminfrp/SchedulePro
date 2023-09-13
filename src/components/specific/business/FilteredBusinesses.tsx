import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import fontSize from "../../../constants/fontSize";
import { AirbnbRating } from "react-native-ratings";
import RightArrow from "../../../assets/icons/RightArrow";
import routes from "../../../constants/routes";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface IProps {
  items: any[];
  navigation: NavigationProp<ParamListBase>;
}

const FilteredBusinesses = (props: IProps) => {
  const { items } = props;
  return (
    <SafeAreaView className="pt-5" style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(e, i) => "dom" + i.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate(routes.singleBussines, item)
            }
          >
            <BusinessItem
              imageUrl={item.imageUrl}
              title={item.jobName}
              location="Italian - American"
              rating={3}
            />
          </TouchableOpacity>
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

interface IBusinessItemProps {
  title: string;
  rating: number;
  location: string;
  imageUrl: string;
}

export const BusinessItem = (props: IBusinessItemProps) => {
  const { imageUrl, location, rating, title } = props;
  return (
    <View style={styles.itemContainer}>
      <View>
        <Image source={{ uri: imageUrl }} style={styles.itemImage} />
      </View>
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{title}</Text>
        <View className="flex-row items-end content-start gap-2">
          <AirbnbRating
            starContainerStyle={{
              paddingLeft: 5,
              width: "100%",
              justifyContent: "flex-start",
            }}
            showRating={false}
            size={12}
            defaultRating={rating}
          />
          <Text style={{ fontSize: 10 }} className="font-bold">
            {rating}
          </Text>
        </View>
        <Text style={{ fontSize: 10 }}>$$$</Text>
        <View
          className="flex-row items-center justify-between"
          style={{ width: "100%", paddingRight: 90 }}
        >
          <Text style={{ fontSize: 10 }}>{location}</Text>
          <RightArrow />
        </View>
      </View>
    </View>
  );
};

export default FilteredBusinesses;

const styles = StyleSheet.create({
  container: {
    marginBottom: 45,
  },
  itemContainer: {
    width: "100%",
    height: 112,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  itemImage: {
    width: 88,
    height: 88,
    borderRadius: 5,
  },
  itemInfo: {
    width: "100%",
    paddingLeft: 10,
    gap: 10,
  },
  itemTitle: {
    ...fontSize.sm,
    fontWeight: "bold",
  },
});
