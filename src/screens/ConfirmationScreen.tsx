import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BaseButton from "../components/base/BaseButton";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import routes from "../constants/routes";
import fontSize from "../constants/fontSize";
import colors from "../constants/colors";
import BaseConfirmation from "../components/base/BaseConfirmation";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
const ConfirmationScreen = (props: IProps) => {
  const { navigation } = props;
  const confirmationCodeHandle = () => {
    navigation.navigate(routes.newPassword);
  };
  return (
    <ScrollView
      className="px-3"
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <KeyboardAvoidingView className="flex-1 px-3">
        <Text style={styles.pageTitle} className="font-bold text-center pt-12">
          Confirmation Code
        </Text>
        <View style={styles.confirmation}>
          <BaseConfirmation />
        </View>
        <View className="flex-1 justify-end pb-5">
          <View style={styles.sectionSpace}>
            <BaseButton pressHandle={confirmationCodeHandle}>
              <Text className="font-bold" style={{color:"white"}}>Verify</Text>
            </BaseButton>
            <TouchableOpacity>
              <Text
                style={styles.resend}
                className="text-center font-bold py-3"
              >
                Resend Confirmation Code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({
  pageTitle: {
    ...fontSize.xl,
  },
  sectionSpace: {
    paddingTop: Dimensions.get("window").width * 0.09,
  },
  resend: {
    ...colors.text.primary,
  },
  confirmation: {
    paddingTop: 37,
  },
});
