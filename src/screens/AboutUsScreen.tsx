import { StyleSheet, Text, ScrollView, Image } from "react-native";
import React from "react";
import fontSize from "../constants/fontSize";

const AboutUsScreen = () => {
  return (
    <ScrollView
      className="flex-1"
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Image
        source={{
          uri: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data_Analyst_Job_Description.jpg",
        }}
        style={styles.img}
        className="rounded-[10px] mt-3"
      ></Image>
      <Text className="px-5 pt-3 self-start font-bold" style={styles.title}>
        Enter Title Here!
      </Text>
      <Text className="px-5 py-3 self-start" style={styles.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </ScrollView>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  img: {
    width: "90%",
    height: 200,
  },
  title: {
    ...fontSize.md,
  },
  desc: {
    ...fontSize.sm,
  },
});
