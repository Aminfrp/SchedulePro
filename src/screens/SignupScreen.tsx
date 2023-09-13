import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import fontSize from "../constants/fontSize";
import BaseTextField from "../components/base/BaseTextField";
import BaseButton from "../components/base/BaseButton";
import colors from "../constants/colors";
import BaseOr from "../components/base/BaseOr";
import FaceBookImg from "../assets/images/Facebook";
import GoogleImg from "../assets/images/Google";
import routes from "../constants/routes";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SignupScreen = (props: IProps) => {
  const { navigation } = props;
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const signupHandle = () => {};
  return (
    <ScrollView
      className="px-3"
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <KeyboardAvoidingView>
        <Text style={styles.pageTitle} className="font-bold text-center pt-12">
          Sign Up
        </Text>
        <View style={styles.sectionSpace}>
          <BaseTextField
            placeholder="Full Name"
            label="Enter your full name"
            onChange={(inputValue: string) => setFullName(inputValue)}
          />
        </View>
        <View style={styles.sectionSpace}>
          <BaseTextField
            placeholder="Eg samiramies.abbasi@gmail.com"
            label="Enter your email address"
            type="email-address"
            onChange={(inputValue: string) => setEmail(inputValue)}
          />
        </View>
        <View style={styles.sectionSpace}>
          <BaseTextField
            placeholder="Eg 0687904917"
            label="Enter your phone number"
            type="phone-pad"
            onChange={(inputValue: string) => setPhoneNumber(inputValue)}
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
        <View style={styles.sectionSpace}>
          <BaseButton pressHandle={signupHandle}>
            <Text className="font-bold" style={{ color: "white" }}>Sign Up</Text>
          </BaseButton>
        </View>
        <View className="flex-row justify-center pt-2">
          <Text style={styles.hasAccount} className="font-bold">
            Already have an account ? {""}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(routes.signin)}>
            <Text style={styles.signin} className="font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <BaseOr />
        <View
          style={[
            styles.sectionSpace,
            { paddingBottom: Dimensions.get("window").width * 0.06 },
          ]}
        >
          <BaseButton pressHandle={signupHandle} outlined>
            <View className="flex-row justify-start px-5">
              <GoogleImg />
              <Text className="font-bold flex-1 text-center" style={{ color: "black" }}> 
                Sign Up with Google
              </Text>
            </View>
          </BaseButton>
          <View className="mt-3">
            <BaseButton pressHandle={signupHandle} outlined>
              <View className="flex-row justify-start px-5">
                <FaceBookImg />
                <Text className="font-bold flex-1 text-center" style={{ color: "black" }}> 
                  Sign Up with Facebook
                </Text>
              </View>
            </BaseButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignupScreen;

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
});
