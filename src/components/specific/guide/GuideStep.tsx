import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import colors from "../../../constants/colors";
import fontSize from "../../../constants/fontSize";
import routes from "../../../constants/routes";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { color } from "react-native-reanimated";

interface IProps {
  activeSlideIndex: number;
  activeSlideHandle: (index: number) => void;
  title: string;
  description: string;
  navigation: NavigationProp<ParamListBase>;
}

const GuideStep = (props: IProps) => {
  const {
    activeSlideIndex,
    activeSlideHandle,
    title,
    description,
    navigation,
  } = props;
  const buttonPosition = activeSlideIndex !== 2 ? "space-between" : "flex-end";
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={[styles.container,{backgroundColor:"white"}]}
    >
      <View style={styles.info} className="flex justify-start flex-1 pb-5">
        <Text style={styles.logo} className="font-bold">
          LOGO
        </Text>
        <Image
          style={styles.appImage}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/0f52/cae9/0250ff9c315df5e2b19b3d15a92dd532?Expires=1687132800&Signature=XZDpiv67Owl34OaxuvFHw14Y77tg9ChR359oDYILT52-ln26GSJyznXR4ubALInQXpJOTAHtb9I75LgGeWDo9SB82AjWNmJnA2va6kAbh5Fgo29g~EumEoGA4qzvoS-7ZO3cUeZD89deL1Ky-jsN2FJbxrTOkiS48Ch3MkbhiUvitUAyISyP4t-~1pOc-xc3TAnd4EDWB~3gMi~UzBEj0J5Vrq0OWWqOjuMMbXnPQZ5oEfnIE2OTHUw4y8cEISaQO5OmUu2NV1nEFCKN0Fk55jNlCVY3WTM5uSsQ6b3~ZNZOq6VfZUcgAIP7vpu5OS~M-iz60HOy9GkxPAkWIrfzPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          }}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {/* swiper indicator */}
        <View style={styles.swiperIndicators}>
          {Array(3)
            .fill(() => {})
            .map((_, i) => {
              const activeIndicatorColor =
                i === activeSlideIndex
                  ? colors.bg.primary.backgroundColor
                  : "#F2F2F2";

              return (
                <View
                  key={i}
                  style={[
                    styles.swiperIndicator,
                    { backgroundColor: activeIndicatorColor },
                  ]}
                />
              );
            })}
        </View>
      </View>
      <View style={[styles.buttonsSection, { justifyContent: buttonPosition }]}>
        {activeSlideIndex !== 2 ? (
          <TouchableOpacity style={styles.textButton}>
            <Text
              style={styles.textButtonName}
              onPress={() => navigation.navigate(routes.signup)}
            >
              Skip
            </Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          style={styles.blockButton}
          onPress={() =>
            activeSlideHandle(activeSlideIndex < 2 ? activeSlideIndex + 1 : 0)
          }
        >
          <Text style={{color:"white"}}>
            {activeSlideIndex === 2 ? "Sign Up" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GuideStep;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  info: { alignItems: "center" },
  logo: {
    ...colors.text.primary,
    ...fontSize.sm,
    paddingBottom: Dimensions.get("window").height * 0.07,
    paddingTop: Dimensions.get("window").height * 0.05,
  },
  appImage: {
    height: Dimensions.get("window").height * 0.3,
    width: Dimensions.get("window").height * 0.3,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
  },
  title: {
    ...fontSize.lg,
    ...colors.text.light_text,
    paddingTop: Dimensions.get("window").height * 0.06,
  },
  description: {
    ...fontSize.sm,
    ...colors.text.light_text,
    paddingTop: Dimensions.get("window").width * 0.08,
    textAlign: "center",
    paddingHorizontal: 25,
  },
  swiperIndicators: {
    flexDirection: "row",
    paddingTop: Dimensions.get("window").width * 0.08,
    gap: 5,
  },
  swiperIndicator: {
    width: 25,
    height: 5,
    borderRadius: 50,
  },
  buttonsSection: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
    paddingBottom: Dimensions.get("window").width * 0.02,
    paddingHorizontal: 25,
    left: Dimensions.get("window").width * 0.06,
  },
  blockButton: {
    ...colors.bg.primary,
    ...fontSize.sm,
    paddingHorizontal: 50,
    borderRadius: 25,
    paddingVertical: 12,
  },
  textButton: {
    ...colors.text.primary,
    paddingVertical: 12,
  },
  textButtonName: {
    ...colors.text.primary,
  },
});
