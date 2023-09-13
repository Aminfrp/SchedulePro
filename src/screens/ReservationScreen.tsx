import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, TouchableWithoutFeedback } from "react-native";
import React from "react";
import BaseTabbar from "../components/base/BaseTabbar";
import RightArrow from "../assets/icons/RightArrow";
import LocationIcon from "../assets/icons/reservation/LocationIcon";
import DateIcon from "../assets/icons/reservation/DateIcon";
import TimeIcon from "../assets/icons/reservation/TimeIcon";
import fontSize from "../constants/fontSize";
import { GenericTouchableProps } from "react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import routes from "../constants/routes";


interface IBusinessItemProps {
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  handleTouchReserveItem: any
}

const BusinessItem = (props: IBusinessItemProps) => {
  const { imageUrl, location, date, time, title, handleTouchReserveItem } = props;
  return (
    <TouchableWithoutFeedback onPress={handleTouchReserveItem}>
      <View style={styles.itemContainer}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.itemImage} />
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.itemTitle}>{title}</Text>

          <View
            className="flex-row items-center justify-between"
            style={{ width: "100%", paddingRight: 90 }}
          >
            <View className="flex-row gap-2 items-center">
              <LocationIcon />
              <Text style={{ fontSize: 10 }}>
                {location}
              </Text>
            </View>
          </View>

          <View
            className="flex-row items-center justify-between"
            style={{ width: "100%", paddingRight: 90 }}
          >
            <View className="flex-row gap-2 items-center">
              <DateIcon />
              <Text style={{ fontSize: 10 }}>
                {date}
              </Text>
            </View>
          </View>

          <View
            className="flex-row items-center justify-between"
            style={{ width: "100%", paddingRight: 90 }}
          >
            <View className="flex-row gap-2 items-center">
              <TimeIcon />
              <Text style={{ fontSize: 10 }}>
                {time}
              </Text>
            </View>
            <RightArrow />
          </View>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Upcoming = (props: {
  items: any[], navigation: NavigationProp<ParamListBase>;
}) => {
  return (
    <SafeAreaView className="py-5 mb-5" style={{ marginBottom: 45 }}>
      <FlatList
        data={props.items}
        keyExtractor={(e, i) => "dom" + i.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <BusinessItem
            imageUrl={item.imageUrl}
            title={item.jobName}
            date={item.date}
            time={item.time}
            location="Italian - American"
            handleTouchReserveItem={() => {
              props.navigation.navigate(routes.reservItem, { item },
              );

            }
            }
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};
const Past = (props: { items: any[] }) => {
  return (
    <View>
      <Text>Past</Text>
    </View>
  );
};

const ReservationScreen = (props) => {
  const jobs = [
    {
      jobName: "Web Developer",
      description:
        "Responsible for designing and developing web applications using modern technologies.",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/gzZpBDV3nX1AWytfLhbgs/d528553697d959544c8ca5b80b6d8beb/web_developer.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
      date: "24 May 2023",
      time: "6:30 p.m."
    },
    {
      jobName: "Data Analyst",
      description:
        "Analyze large datasets to provide insights and support data-driven decision-making.",
      imageUrl:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data_Analyst_Job_Description.jpg",
      date: "24 May 2023",
      time: "6:30 p.m."
    },
    {
      jobName: "Graphic Designer",
      description:
        "Create visually appealing designs for various mediums, including print and digital.",
      imageUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/91c293673ad8b206e7125792c0e422b3-1612436784458/graphic%20design-min.jpg",
      date: "24 May 2023",
      time: "6:30 p.m."
    },
    {
      jobName: "Software Engineer",
      description:
        "Design, develop, and maintain software applications to meet specific business requirements.",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4NAwrInfpEhTT3Kti5eMA6/e5e7a301fc824d01dda224830a065135/GettyImages-1341554760.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
      date: "24 May 2023",
      time: "6:30 p.m."
    },
    {
      jobName: "Marketing Manager",
      description:
        "Develop and implement marketing strategies to promote products or services.",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7e5BSigG7s0OI5FnjzNZeu/74ca690e1273d71a118cdc10c2204268/GettyImages-1199434187.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
      date: "24 May 2023",
      time: "6:30 p.m."
    },
    {
      jobName: "Marketing Manager",
      description:
        "Develop and implement marketing strategies to promote products or services.",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7e5BSigG7s0OI5FnjzNZeu/74ca690e1273d71a118cdc10c2204268/GettyImages-1199434187.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
      date: "24 May 2023",
      time: "6:30 p.m."
    },
    {
      jobName: "Marketing Manager",
      description:
        "Develop and implement marketing strategies to promote products or services.",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7e5BSigG7s0OI5FnjzNZeu/74ca690e1273d71a118cdc10c2204268/GettyImages-1199434187.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
      date: "24 May 2023",
      time: "6:30 p.m."
    },
    {
      jobName: "Marketing Manager",
      description:
        "Develop and implement marketing strategies to promote products or services.",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7e5BSigG7s0OI5FnjzNZeu/74ca690e1273d71a118cdc10c2204268/GettyImages-1199434187.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
      date: "24 May 2023",
      time: "6:30 p.m."
    },
  ];
  return (
    <View style={styles.container} className="flex-1 px-3">
      <BaseTabbar titles={["Upcoming", "Past"]} contents={[<Upcoming items={jobs} navigation={props.navigation} />, <Past items={jobs} />]} />
    </View>
  );
};

export default ReservationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
