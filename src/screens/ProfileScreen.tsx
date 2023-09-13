import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import colors from "../constants/colors";
import fontSize from "../constants/fontSize";
import RightArrow from "../assets/icons/profile/Right";
import Aboutus from "../assets/icons/profile/Aboutus";
import Contactus from "../assets/icons/profile/Contactus";
import Invoices from "../assets/icons/profile/Invoices";
import Payment from "../assets/icons/profile/Payment";
import SaveBusiness from "../assets/icons/profile/SaveBusiness";
import Reservation from "../assets/icons/profile/Reservation";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import routes from "../constants/routes";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const ProfileScreen = (props: IProps) => {
  const LINKS = [
    {
      name: "Reservation",
      icon: <Reservation />,
      to: routes.reservation,
    },
    {
      name: "Saved Businesses",
      icon: <SaveBusiness />,
      to: routes.savedBusiness,
    },
    {
      name: "Invoices",
      icon: <Invoices />,
      to: routes.invoices,
    },
    {
      name: "Payment Methods",
      icon: <Payment />,
      to: routes.payment,
    },
    {
      name: "About Us",
      icon: <Aboutus />,
      to: routes.aboutus,
    },
    {
      name: "Contact Us",
      icon: <Contactus />,
      to: routes.contactus,
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.profileInfo} className="mb-5 pt-5">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
            onPress={() => props.navigation.navigate(routes.editprofile)}
          >
            <Text style={[styles.profileActions, styles.otherActions]}>
              Edit
            </Text>
          </TouchableOpacity>
          <Text style={[styles.profileActions, styles.title]}>Profile</Text>
          <Text style={[styles.profileActions, styles.otherActions]}>
            Sign out
          </Text>
        </View>
        <View
          className="items-center relative self-center"
          style={styles.profileImageContainer}
        >
          <Image
            source={{
              uri: "https://xsgames.co/randomusers/assets/avatars/female/52.jpg",
            }}
            style={styles.profileImage}
          ></Image>
        </View>
      </View>
      <View style={styles.profileLinks}>
        <Text style={styles.profileUsername}>Samira Abbasi</Text>
        <View className="w-full items-center pb-8">
          {LINKS.map((link, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => props.navigation.navigate(link.to)}
            >
              <View
                className="flex-row justify-between items-center pt-10"
                style={{ width: Dimensions.get("window").width * 0.9 }}
              >
                <View className="flex-row gap-3 items-center">
                  {link.icon}
                  <Text style={styles.link}>{link.name}</Text>
                </View>
                <RightArrow />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileInfo: {
    height: Dimensions.get("window").height * 0.35,
    ...colors.bg.primary,
  },
  profileActions: {
    color: "white",
  },
  title: {
    fontSize: 26,
    fontWeight: "500",
  },
  otherActions: {
    fontWeight: "500",
    ...fontSize.md,
  },
  profileImageContainer: {
    elevation: Platform.OS === "ios" ? 0 : 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    width: Dimensions.get("window").height * 0.3,
    height: Dimensions.get("window").height * 0.3,
    borderWidth: 0,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    top: Dimensions.get("window").height * 0.06,
  },
  profileImage: {
    width: Dimensions.get("window").height * 0.3,
    height: Dimensions.get("window").height * 0.3,
    position: "absolute",
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
  },
  profileLinks: {
    paddingTop: 100,
    alignItems: "center",
  },
  profileUsername: {
    fontSize: 40,
    fontWeight: "600",
  },
  link: {
    ...fontSize.md,
    fontWeight: "500",
  },
});
