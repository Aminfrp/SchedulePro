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
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import fontSize from "../constants/fontSize";
import colors from "../constants/colors";
import BaseTextField from "../components/base/BaseTextField";
import BaseButton from "../components/base/BaseButton";
import BaseOr from "../components/base/BaseOr";
import routes from "../constants/routes";
import FaceBookImg from "../assets/images/Facebook";
import GoogleImg from "../assets/images/Google";
interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
const SigninScreen = (props: IProps) => {
  const { navigation } = props;
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const signinHandle = () => {};

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
          Sign In
        </Text>
        <View style={styles.sectionSpace}>
          <BaseTextField
            placeholder="Email or Phone Number"
            label="Enter your email address or phone number"
            onChange={(inputValue: string) => setUsername(inputValue)}
          />
        </View>
        <View style={styles.sectionSpace}>
          <BaseTextField
            placeholder="********"
            label="Enter your password"
            onChange={(inputValue: string) => setPassword(inputValue)}
            password
          />
        </View>

        <View className="flex-1 justify-end">
          <View style={styles.sectionSpace}>
            <BaseButton pressHandle={signinHandle}>
              <Text className="font-bold" style={{ color: "white" }}>Sign In</Text>
            </BaseButton>
          </View>
          <View className="items-center pt-2">
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.forgetpassword)}
            >
              <Text style={styles.hasAccount} className="font-bold">
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
          <BaseOr />
          <View
            style={[
              styles.otherSignup,
              { paddingBottom: Dimensions.get("window").width * 0.03 },
            ]}
          >
            <BaseButton pressHandle={signinHandle} outlined>
              <View className="flex-row justify-start px-5">
                <GoogleImg />
                <Text className="font-bold flex-1 text-center" style={{ color: "black" }}>
                  Sign Up with Google
                </Text>
              </View>
            </BaseButton>
            <View className="mt-3">
              <BaseButton pressHandle={signinHandle} outlined>
                <View className="flex-row justify-start px-5">
                  <FaceBookImg />
                  <Text className="font-bold flex-1 text-center" style={{ color: "black" }}>
                    Sign Up with Facebook
                  </Text>
                </View>
              </BaseButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  pageTitle: {
    ...fontSize.xl,
  },
  hasAccount: {
    ...colors.text.primary,
    ...fontSize.sm,
  },
  signin: {
    ...colors.text.primary,
    ...fontSize.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.text.primary.color,
  },
  googleImg: {
    height: 20,
    width: 20,
  },
  fbImg: {
    height: 20,
    width: 20,
  },
  sectionSpace: {
    paddingTop: Dimensions.get("window").width * 0.09,
  },
  otherSignup: {
    paddingTop: Dimensions.get("window").width * 0.03,
  },
});
