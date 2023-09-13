import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GuideScreen from "./src/screens/GuideScreen";
import SignUpScreen from "./src/screens/SignupScreen";
import SignInScreen from "./src/screens/SigninScreen";
import routes from "./src/constants/routes";
import ForgetPasswordScreen from "./src/screens/ForgetPasswordScreen";
import ConfirmationScreen from "./src/screens/ConfirmationScreen";
import NewPasswordScreen from "./src/screens/NewPasswordScreen";
import "react-native-gesture-handler";
import CustomDrawer from "./src/components/specific/drawer/Drawer";
import { StatusBar } from "expo-status-bar";
import store from "./src/store";
import { Provider } from "react-redux";

// screens stack
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar translucent={false} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen
            name="Drawer"
            component={CustomDrawer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={routes.guide}
            component={GuideScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={routes.signup}
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={routes.signin}
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={routes.forgetpassword}
            component={ForgetPasswordScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={routes.confirmation}
            component={ConfirmationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={routes.newPassword}
            component={NewPasswordScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
