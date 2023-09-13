import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { AirbnbRating } from "react-native-ratings";

interface IProps {
  name: string;
  description: string;
  avatar: string;
  rate: number;
}

const CommentCard = (props: IProps) => {
  const { avatar, description, name, rate } = props;
  return (
    <View style={styles.container} className="mt-2">
      <View className="flex-row">
        {/* avatar */}
        <Image source={{ uri: avatar }} style={styles.avatar}></Image>
        {/* rate */}
        <View className="px-3 font-bold">
          <Text className="font-bold">{name}</Text>
          {/* rating */}
          <View className="flex-row px-2 pt-1 gap-3 items-center">
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
      <Text className="py-3">{description}</Text>
    </View>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    padding: 10,
    width: 350,
    minHeight: 150,
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
