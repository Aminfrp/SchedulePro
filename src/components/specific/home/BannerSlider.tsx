import {
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  View,
  Image,
} from "react-native";
import React from "react";
import fontSize from "../../../constants/fontSize";

interface IProps {
  items: any[];
}

const BannerSlider = (props: IProps) => {
  const { items } = props;

  return (
    <SafeAreaView>
      <FlatList
        data={items}
        horizontal
        keyExtractor={(e, i) => "dom" + i.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <BannerSliderItem
            jobName={item.jobName}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

interface IBannerSliderItemProps {
  jobName: string;
  description: string;
  imageUrl: string;
}

const BannerSliderItem = (props: IBannerSliderItemProps) => {
  const { description, imageUrl, jobName } = props;
  return (
    <View style={styles.bannerItem}>
      <Image source={{ uri: imageUrl }} style={styles.bannerImage}></Image>
      <View style={styles.bannerInfo}>
        <Text style={styles.jobTitle}>Book Your Next Event!</Text>
        <Text numberOfLines={1} style={styles.jobDesc}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({
  bannerItem: {
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
  bannerImage: {
    width: 300,
    height: 160,
  },
  bannerInfo: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#FFFFFFCC",
    width: "100%",
    padding: 20,
    height: 80,
  },
  jobTitle: {
    fontWeight: "bold",
    ...fontSize.md,
  },
  jobDesc: {
    ...fontSize.sm,
  },
});
