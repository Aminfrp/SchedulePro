import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";
import { AirbnbRating } from "react-native-ratings";
import colors from "../../../constants/colors";

interface IProps {
  items: any[];
}

const SearchedJobsList = (props: IProps) => {
  const { items } = props;

  return (
    <SafeAreaView className="mb-40">
      <FlatList
        data={items}
        keyExtractor={(e, i) => "dom" + i.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        renderItem={({ item }) => (
          <JobSliderItem jobName={item.jobName} imageUrl={item.imageUrl} />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

interface IJobSliderItemProps {
  jobName: string;
  imageUrl: string;
}

const JobSliderItem = (props: IJobSliderItemProps) => {
  const { imageUrl, jobName } = props;
  return (
    <View style={styles.itemContainer} className="mb-5">
      {/* info */}
      <View style={styles.itemInfo}>
        <Image source={{ uri: imageUrl }} style={styles.itemImage}></Image>
        <View style={styles.itemBaseInfo}>
          <Text style={{ marginBottom: 10 }} className="font-bold">
            {jobName}
          </Text>
          <Text style={styles.calendar} className="pb-1">
            Toronto, Canada
          </Text>
          <View className="flex-row items-end justify-start items-center">
            <AirbnbRating showRating={false} size={10} />
            <Text style={styles.calendar} className="font-bold">
              4.0 (158 reviews)
            </Text>
          </View>
          <Text style={styles.calendar}>$$$ - English and Spanish</Text>
        </View>
      </View>
      <Text className="py-3">Open - Closes at 10 p.m.</Text>
      <Text>Phone: 031- 456822669</Text>

      {/* times */}
      <ScrollView horizontal contentContainerStyle={styles.itemTimes}>
        <View style={styles.itemTime}>
          <Text style={[styles.itemTimeNumber, { color: "white" }]}>
            6:30 p.m.
          </Text>
        </View>
        <View style={styles.itemTime}>
          <Text style={[styles.itemTimeNumber, { color: "white" }]}>
            6:30 p.m.
          </Text>
        </View>
        <View style={styles.itemTime}>
          <Text style={[styles.itemTimeNumber, { color: "white" }]}>
            7:30 p.m.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchedJobsList;

const styles = StyleSheet.create({
  viewAll: {
    ...colors.text.primary,
  },
  itemContainer: {
    padding: 10,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    minWidth: 280,
  },
  itemInfo: {
    flexDirection: "row",
    gap: 10,
  },
  itemBaseInfo: {
    gap: 3,
  },
  calendar: {
    fontSize: 10,
    color: "#8D8C8C",
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemTimes: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    paddingTop: 25,
  },
  itemTime: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    ...colors.bg.primary,
    borderRadius: 25,
    width: (Dimensions.get("window").width / 3) * 0.8,
  },
  itemTimeNumber: {
    fontSize: 10,
    textAlign: "center",
  },
});
