import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { AirbnbRating } from "react-native-ratings";

interface IProps {
  name: string;
  rate: number;
  comment: string;
  avatar: string;
  images: string[];
}

const ReviewsCard = (props: IProps) => {
  const { name, rate, comment, avatar, images } = props;
  return (
    <View style={styles.container} className="mt-2">
      <View className="flex-row">
        {/* avatar */}
        <Image source={{ uri: avatar }} style={styles.avatar}></Image>
        {/* rate */}
        <View className="px-3 font-bold justify-between">
          <Text>{name}</Text>
          {/* rating */}
          <View className="flex-row px-1 gap-3 items-center">
            <AirbnbRating
              starContainerStyle={{
                width: "100%",
                marginTop: 12,
                justifyContent: "flex-start",
              }}
              showRating={false}
              size={12}
              defaultRating={rate}
            />
            <Text className="font-bold ">{rate}</Text>
          </View>
        </View>
        {/* date */}
        <Text className="ml-auto" style={styles.date}>
          4 days ago
        </Text>
      </View>
      <Text className="py-3">{comment}</Text>
      <View className="flex-row gap-2">
        {images.map((image, i) => {
          return (
            <Image
              source={{ uri: image }}
              key={i}
              style={styles.images}
              className="flex-1"
            ></Image>
          );
        })}
      </View>
    </View>
  );
};

export default ReviewsCard;

const styles = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
  },
  date: {
    color: "#8D8C8C",
  },
  images: {
    width: 100,
    height: 90,
    borderRadius: 10,
  },
});
