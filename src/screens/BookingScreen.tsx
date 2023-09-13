import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DateIcon from "../assets/icons/reservation/DateIcon";
import PeopleIcon from "../assets/icons/reservation/PeopleIcon";
import TimeIcon from "../assets/icons/reservation/TimeIcon";
import BaseTextField from "../components/base/BaseTextField";
import BaseCheckBox from "../components/base/BaseCheckBox";
import BaseButton from "../components/base/BaseButton";
import BasePhonePicker from "../components/base/BasePhonePicker";

const BookingScreen = () => {
  return (
    <View className="flex-1 p-5" style={{ backgroundColor: "white" }}>
      <Text className="font-bold">Hilton Restaurant</Text>
      <View className="pt-5 px-2 flex-row">
        <View className="flex-1 flex-row items-center gap-2">
          <DateIcon />
          <Text>Service A</Text>
        </View>
        <View className="flex-1 flex-row items-center gap-2">
          <PeopleIcon />
          <Text>4 People</Text>
        </View>
      </View>
      <View className="pt-3 px-2 flex-row">
        <View className="flex-1 flex-row items-center gap-2">
          <DateIcon />
          <Text>May 24</Text>
        </View>
        <View className="flex-1 flex-row items-center gap-2">
          <TimeIcon />
          <Text>6:30 p.m.</Text>
        </View>
      </View>
      <Text className="font-bold py-5">Customer information</Text>
      <BaseTextField
        onChange={() => {}}
        label="Full Name"
        placeholder="Samira Abasi"
      />
      <BaseTextField
        onChange={() => {}}
        label="Email address"
        placeholder="samiramies.abbasi@gmail.com"
        type="email-address"
        customClassName="py-3"
      />
      <BasePhonePicker
        customClassName="pb-3"
        placeholder="689504917"
        label="Phone number"
        onChange={() => {}}
      ></BasePhonePicker>
      <BaseTextField
        onChange={() => {}}
        label="Additional request"
        placeholder="Please type your request."
        customClassName="pb-5"
      />
      <BaseCheckBox label="Add booking detail to Calendar." />
      <BaseButton btnStyle={styles.bookBtn} pressHandle={() => {}}>
        <Text style={{ color: "white" }}>Book</Text>
      </BaseButton>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  bookBtn: {
    marginTop: "auto",
    width: "60%",
    alignSelf: "flex-end",
  },
});
