import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import BusinessSearch from "../components/specific/home/BusinessSearch";
import BaseTimepick from "../components/base/BaseTimepick";
import BaseDatepicker from "../components/base/BaseDatepicker";
import BaseButton from "../components/base/BaseButton";
import JobsSlider from "../components/specific/home/JobsSlider";
import SearchedJobsList from "../components/specific/search/SearchedJobsList";
import routes from "../constants/routes";

const SearchScreen = (props) => {
  const jobs = [
    {
      jobName: "Web Developer",
      description:
        "Responsible for designing and developing web applications using modern technologies.",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/gzZpBDV3nX1AWytfLhbgs/d528553697d959544c8ca5b80b6d8beb/web_developer.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
    },
    {
      jobName: "Data Analyst",
      description:
        "Analyze large datasets to provide insights and support data-driven decision-making.",
      imageUrl:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data_Analyst_Job_Description.jpg",
    },
    {
      jobName: "Graphic Designer",
      description:
        "Create visually appealing designs for various mediums, including print and digital.",
      imageUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/91c293673ad8b206e7125792c0e422b3-1612436784458/graphic%20design-min.jpg",
    },
    {
      jobName: "Software Engineer",
      description:
        "Design, develop, and maintain software applications to meet specific business requirements.",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4NAwrInfpEhTT3Kti5eMA6/e5e7a301fc824d01dda224830a065135/GettyImages-1341554760.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
    },
    {
      jobName: "Marketing Manager",
      description:
        "Develop and implement marketing strategies to promote products or services.",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7e5BSigG7s0OI5FnjzNZeu/74ca690e1273d71a118cdc10c2204268/GettyImages-1199434187.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
    },
  ];

  return (
    <View className="flex-1 p-5" style={styles.container}>
      <View className="flex-1">
        <View className="flex-row w-full">
          <BaseTimepick customClassName="mr-2 mb-4" />
          <BaseDatepicker customClassName="ml-2 mb-4" />
        </View>
        <BusinessSearch customColor="#FFFFFF" />
        <View>
          <BaseButton pressHandle={() => {}} btnStyle={styles.searchBtn}>
            <Text style={styles.searchBtntxt}>Search</Text>
          </BaseButton>
        </View>
        <View className="pt-5">
          <SearchedJobsList items={jobs} />
        </View>
      </View>
      <BaseButton
        pressHandle={() => {
          props.navigation.navigate(routes.searchOnMap);
        }}
        btnStyle={styles.mapBtn}
      >
        <Text style={{ color: "white" }}>Search on Map</Text>
      </BaseButton>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
  searchBtn: { width: "40%", alignSelf: "flex-end", marginTop: 20 },
  searchBtntxt: { color: "white" },
  mapBtn: {
    position: "absolute",
    bottom: 20,
    right: 30,
    width: "40%",
    elevation: 5,
  },
});
