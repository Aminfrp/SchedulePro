import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from "react-native";
import XIcon from "../assets/icons/XIcon";
import React from "react";
import colors from "../constants/colors";
import BaseTextField from "../components/base/BaseTextField";
import BaseDropDown from "../components/base/BaseDropDown";
import routes from "../constants/routes";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const EditProfile = (props: IProps) => {
  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <KeyboardAvoidingView className="flex-1 p-5 items-center">
        {/* page actions */}
        <View className="flex-row w-full justify-between">
          <TouchableOpacity
            onPress={() => props.navigation.navigate(routes.profile)}
          >
            <XIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.saveBtn}>Save</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: "https://xsgames.co/randomusers/assets/avatars/female/52.jpg",
          }}
          style={styles.avatar}
          className="mt-5"
        ></Image>
        <TouchableOpacity className="my-3">
          <Text style={styles.saveBtn}>Set New Photo</Text>
        </TouchableOpacity>
        <View className="flex w-full py-5 ">
          <BaseTextField
            onChange={() => {}}
            label="Full Name"
            placeholder="Samira Abasi"
            customClassName="pb-5"
          />
          <BaseTextField
            onChange={() => {}}
            label="Email address"
            placeholder="samiramies.abbasi@gmail.com"
            customClassName="pb-5"
          />
          <BaseTextField
            onChange={() => {}}
            label="Phone number"
            customClassName="pb-5"
            placeholder="689504917"
          />
          <BaseTextField
            onChange={() => {}}
            customClassName="pb-5"
            label="Address"
            placeholder="Street and house number"
          />
          <BaseTextField
            onChange={() => {}}
            customClassName="pb-5"
            label="City"
            placeholder="Eg Amsterdam"
          />
          <BaseTextField
            onChange={() => {}}
            customClassName="pb-5"
            label="Zip code"
            placeholder="Eg 2711EP"
          />
          <BaseDropDown
            onChange={(item) => {}}
            label="Country"
            placeholder="Select a country"
            items={[
              { key: "Iran", value: "Iran" },
              { key: "Canada", value: "Canada" },
              { key: "Netherlands", value: "Netherlands" },
            ]}
          />
          <TouchableOpacity className="py-5">
            <Text style={styles.changePassBtn}>Change password</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.delAccountBtn}>Delete account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  saveBtn: {
    ...colors.text.primary,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
  },
  changePassBtn: {
    ...colors.text.primary,
    paddingLeft: 10,
  },
  delAccountBtn: {
    color: "#E91D1D",
    paddingLeft: 10,
  },
});
