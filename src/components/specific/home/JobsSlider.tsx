import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";
import { AirbnbRating } from "react-native-ratings";
import colors from "../../../constants/colors";

interface IProps {
  items: any[];
  title: string;
}

const JobsSlider = (props: IProps) => {
  const { items, title } = props;

  return (
    <SafeAreaView>
      <View className="flex-row justify-between m-3">
        <Text className="font-bold">{title}</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>view all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={items}
        horizontal
        keyExtractor={(e, i) => "dom" + i.toString()}
        showsHorizontalScrollIndicator={false}
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
          <View className="flex-row items-end content-start gap-2">
            <AirbnbRating
              starContainerStyle={{ gap: 1, width: 100 }}
              showRating={false}
              size={10}
            />
            <Text style={styles.calendar} className="font-bold">
              4.0
            </Text>
          </View>
          <View className="flex-row items-center gap-2">
            <CalendarIcon />
            <Text style={styles.calendar}>CAD 55 / hour</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <LocationIcon />
            <Text style={styles.calendar}>Toronto, Canada</Text>
          </View>
        </View>
      </View>

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

export default JobsSlider;

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
    paddingHorizontal: Dimensions.get("window").width * 0.01,
    ...colors.bg.primary,
    borderRadius: 25,
    width: (Dimensions.get("window").width / 3) * 0.6,
  },
  itemTimeNumber: {
    fontSize: 10,
    textAlign: "center",
  },
});
