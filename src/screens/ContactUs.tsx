import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import fontSize from "../constants/fontSize";
import colors from "../constants/colors";
import CellphoneIcon from "../assets/icons/contactus/CellphoneIcon";
import EmailIcon from "../assets/icons/contactus/EmailIcon";
import LocationIcon from "../assets/icons/contactus/LocationIcon";
import TwitterIcon from "../assets/icons/contactus/TwitterIcon";
import InstaIcon from "../assets/icons/contactus/InstaIcon";

const ContactUs = () => {
  return (
    <ScrollView
      className="flex-1"
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Text className="font-bold py-5">
        Any question or remarks? Just write us a message!
      </Text>
      <View style={styles.contactBox}>
        <Text className="font-bold py-3" style={styles.boxTitle}>
          Contact Information
        </Text>
        <Text className="pb-2" style={styles.boxCall}>
          Contact us through
        </Text>
        <CellphoneIcon />
        <Text className="py-2" style={styles.boxMobile}>
          +1 68 790 49 17
        </Text>
        <EmailIcon />
        <Text className="py-2" style={styles.boxMobile}>
          samiramies.abbasi@gmail.com
        </Text>
        <LocationIcon />
        <Text className="py-2" style={styles.address}>
          Europaweg 75F, Amsterdam 2711EP The Netherlands
        </Text>

        <View className="flex-row gap-5 pb-5 pt-10">
          <TwitterIcon />
          <InstaIcon />
          <TwitterIcon />
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  contactBox: {
    ...colors.bg.primary,
    width: "90%",
    borderRadius: 10,
    alignItems: "center",
  },
  boxTitle: {
    ...fontSize.x,
    color:"white",
  },
  boxCall: {
    ...fontSize.xs,
    color: "white",

  },
  boxMobile: {
    ...fontSize.xs,
    color: "white",

  },
  address: {
    ...fontSize.xs,
    width: "60%",
    textAlign: "center",
    color: "white",

  },
});
