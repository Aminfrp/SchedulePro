import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import XIcon from "../../../assets/icons/XIcon";
import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import routes from "../../../constants/routes";

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <View style={styles.container}>
      {/* drawer header */}
      <View style={styles.drawerHeader}>
        <Text style={styles.logo}>LOGO</Text>
        <Pressable onPress={() => props.navigation.closeDrawer()}>
          <XIcon />
        </Pressable>
      </View>
      {/* drawer content */}
      <ScrollView style={styles.content}>
        <Text
          style={styles.links}
          onPress={() => props.navigation.navigate(routes.signup)}
        >
          Sign Up/ Sign In
        </Text>
        <Text
          style={styles.links}
          onPress={() => props.navigation.navigate(routes.signup)}
        >
          Language
        </Text>
        <Text
          style={styles.links}
          onPress={() => props.navigation.navigate(routes.signup)}
        >
          Home
        </Text>
        <Text
          style={styles.links}
          onPress={() => props.navigation.navigate(routes.signup)}
        >
          Blog
        </Text>
        <Text
          style={styles.links}
          onPress={() => props.navigation.navigate(routes.signup)}
        >
          Customer Support
        </Text>
        <Text
          style={styles.links}
          onPress={() => props.navigation.navigate(routes.signup)}
        >
          Privacy Policy
        </Text>
        <Text
          style={styles.links}
          onPress={() => props.navigation.navigate(routes.signup)}
        >
          About Us
        </Text>
        <Text
          style={styles.links}
          onPress={() => props.navigation.navigate(routes.signup)}
        >
          Contact Us
        </Text>
      </ScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  drawerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    paddingTop: 15,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 16,
  },
  links: {
    paddingVertical: 10,
  },
});
