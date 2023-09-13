import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import fontSize from "../constants/fontSize";
import BaseTextField from "../components/base/BaseTextField";
import BaseButton from "../components/base/BaseButton";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import routes from "../constants/routes";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const NewPasswordScreen = (props: IProps) => {
  const { navigation } = props;
  const [password, setPassword] = React.useState("");
  const [cpassword, setCpassword] = React.useState("");
  const sendConfirmationCode = () => {
    navigation.navigate(routes.confirmation);
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
          Forget password
        </Text>
        <View style={styles.sectionSpace}>
          <BaseTextField
            placeholder="Enter your new password"
            label="New Password"
            password
            onChange={(inputValue: string) => setPassword(inputValue)}
          />
          <BaseTextField
            placeholder="Confirm your new password"
            label="Confirm New Password"
            onChange={(inputValue: string) => setCpassword(inputValue)}
            password
          />
        </View>

        <View className="flex-1 justify-end pb-5">
          <View style={styles.sectionSpace}>
            <BaseButton pressHandle={sendConfirmationCode}>
              <Text className="font-bold" style={{ color: "white" }}>Set New Password</Text>
            </BaseButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  pageTitle: {
    ...fontSize.xl,
  },
  sectionSpace: {
    paddingTop: Dimensions.get("window").width * 0.09,
    flexDirection: "column",
    gap: 20,
  },
});
