import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Tabs from "../tabs/Tabs";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();
const CustomDrawer = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={DrawerContent}
      id="LeftDrawer"
    >
      <Drawer.Screen
        name={"Tabs"}
        options={{
          title: "LOGO",
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerShown: false,
        }}
        component={Tabs}
      />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;
