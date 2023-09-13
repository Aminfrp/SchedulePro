import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { AirbnbRating } from "react-native-ratings";
import fontSize from "../constants/fontSize";
import BaseTabbar from "../components/base/BaseTabbar";
import BaseButton from "../components/base/BaseButton";
import Overview from "../components/specific/business/Overview";
import routes from "../constants/routes";

const SingleBusinessScreen = (props) => {
  const { description, imageUrl, jobName } = props.route.params;

  return (
    <View className="flex-1 px-5" style={styles.container}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View style={styles.bannerContainer}>
          <Image style={styles.bannerImage} source={{ uri: imageUrl }} />
          <View style={styles.infoContainer} className="p-3">
            <Text className="font-bold" style={styles.title}>
              {jobName}
            </Text>
            <Text className="py-1 font-bold" style={styles.location}>
              Amsterdam, Netherlands
            </Text>
            <View className="flex-row px-1 gap-2 items-center">
              <AirbnbRating
                starContainerStyle={{
                  width: "100%",
                  marginTop: 10,
                  justifyContent: "flex-start",
                }}
                showRating={false}
                size={12}
                defaultRating={5}
              />
              <Text className="font-bold">5</Text>
            </View>
          </View>
        </View>
        <BaseTabbar
          titles={["Overview", "Services", "Additional Info"]}
          contents={[
            <Overview title={jobName} description={description} rate={5} />,
            <Overview title={jobName} description={description} rate={5} />,
            <Overview title={jobName} description={description} rate={5} />,
          ]}
        />
      </ScrollView>
      <BaseButton
        pressHandle={() => {
          props.navigation.navigate(routes.selectBookTime);
        }}
        btnStyle={{
          position: "absolute",
          bottom: 40,
          right: 30,
          width: "30%",
          elevation: 5,
        }}
      >
        <Text style={{ color: "white" }}>Book now</Text>
      </BaseButton>
    </View>
  );
};

export default SingleBusinessScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  bannerContainer: {
    position: "relative",
  },
  infoContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#FFFFFFCC",
    width: "100%",
  },
  bannerImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    ...fontSize.md,
  },
  location: {
    ...fontSize.xs,
  },
});
