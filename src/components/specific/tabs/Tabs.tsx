import React from "react";
import { TouchableOpacity } from "react-native";
import HomeScreen from "../../../screens/HomeScreen";
import BussinessScreen from "../../../screens/BussinessScreen";
import SearchScreen from "../../../screens/SearchScreen";
import ProfileScreen from "../../../screens/ProfileScreen";
import CalendarMonthScreen from "../../../screens/CalendarMonthScreen";
import routes from "../../../constants/routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchIcon from "../../../assets/icons/SearchIcon";
import HomeIcon from "../../../assets/icons/tabbar/HomeIcon";
import BusinessIcon from "../../../assets/icons/tabbar/BusinessIcon";
import ProfileIcon from "../../../assets/icons/tabbar/ProfileIcon";
import CalendarIcon from "../../../assets/icons/tabbar/CalendarIcon";
import MenuIcon from "../../../assets/icons/MenuIcon";
import FilterIcon from "../../../assets/icons/FilterIcon";
import colors from "../../../constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutUsScreen from "../../../screens/AboutUsScreen";
import ContactUs from "../../../screens/ContactUs";
import EditProfile from "../../../screens/EditProfile";
import ReservationScreen from "../../../screens/ReservationScreen";
import ReservItemScreen from "../../../screens/ReservItemScreen";
import { RouteProp } from "@react-navigation/native";
import SavedBusinessScreen from "../../../screens/SavedBusinessScreen";
import InvoicesScreen from "../../../screens/InvoicesScreen";
import PaymentScreen from "../../../screens/PaymentScreen";
import ReviewsScreen from "../../../screens/ReviewsScreen";
import AddCardScreen from "../../../screens/AddCardScreen";
import SingleBusinessScreen from "../../../screens/SingleBusinessScreen";
import SelectBookTimeScreen from "../../../screens/SelectBookTimeScreen";
import BookingScreen from "../../../screens/BookingScreen";
import SearchOnMapScreen from "../../../screens/SearchOnMapScreen";
import { Platform, Text } from "react-native";
import BaseCalendarDropDown from "../../base/BaseCalendarDropDown";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import CalendarYearScreen from "../../../screens/CalendarYearScreen";
import CalendarDayScreen from "../../../screens/CalendarDayScreen";
import {
  createDrawerNavigator,
  useDrawerStatus,
} from "@react-navigation/drawer";
import FilterBusinessDrawer from "../drawer/FilterBusinessDrawer";
import FilterSearchDrawer from "../drawer/FilterSearchDrawer";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const RightDrawer = createDrawerNavigator();
const SearchRightDrawer = createDrawerNavigator();

const CalendarNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.monthCalendar}
        component={CalendarMonthScreen}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.yearCalendar}
        component={CalendarYearScreen}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.dayCalendar}
        component={CalendarDayScreen}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const SearchNavigator = () => {
  return (
    <SearchRightDrawer.Navigator
      initialRouteName={routes.search}
      drawerContent={() => <FilterSearchDrawer />}
    >
      <SearchRightDrawer.Screen
        name={routes.search}
        component={SearchScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          drawerPosition: "right",
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                className="pr-3"
              >
                <FilterIcon />
              </TouchableOpacity>
            );
          },
          headerLeft: () => null,
        })}
      />
      <SearchRightDrawer.Screen
        name={routes.searchOnMap}
        component={SearchOnMapScreen}
        options={({ navigation }) => ({
          headerTitle: "Search on Map",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerShown: false,
        })}
      />
    </SearchRightDrawer.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.profile}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.aboutus}
        component={AboutUsScreen}
        options={{
          headerTitle: "About Us",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name={routes.contactus}
        component={ContactUs}
        options={{
          headerTitle: "Contact Us",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name={routes.reservation}
        component={ReservationScreen}
        options={{
          headerTitle: "Reservations",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name={routes.reservItem}
        component={ReservItemScreen}
        options={({ route }: any) => {
          return {
            headerTitle: "Reservations",
            headerTitleAlign: "center",
            headerShadowVisible: false,
          };
        }}
      />
      <Stack.Screen
        name={routes.savedBusiness}
        component={SavedBusinessScreen}
        options={({ route }: any) => {
          return {
            headerTitle: "Saved Business",
            headerTitleAlign: "center",
            headerShadowVisible: false,
          };
        }}
      />
      <Stack.Screen
        name={routes.invoices}
        component={InvoicesScreen}
        options={({ route }: any) => {
          return {
            headerTitle: "Invoices",
            headerTitleAlign: "center",
            headerShadowVisible: false,
          };
        }}
      />
      <Stack.Screen
        name={routes.payment}
        component={PaymentScreen}
        options={({ route }: any) => {
          return {
            headerTitle: "Payment Methods",
            headerTitleAlign: "center",
            headerShadowVisible: false,
          };
        }}
      />
      <Stack.Screen
        name={routes.review}
        component={ReviewsScreen}
        options={({ route }: any) => {
          return {
            headerTitle: "Reviews",
            headerTitleAlign: "center",
            headerShadowVisible: false,
          };
        }}
      />
      <Stack.Screen
        name={routes.addCard}
        component={AddCardScreen}
        options={({ route }: any) => {
          return {
            headerTitle: "Add New Card",
            headerTitleAlign: "center",
            headerShadowVisible: false,
          };
        }}
      />
      <Stack.Screen
        name={routes.editprofile}
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const BussinessScreenWithDrawer = (props) => {
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      initialRouteName="RightDrawer"
      drawerContent={() => <FilterBusinessDrawer />}
    >
      <RightDrawer.Screen
        name={routes.bussiness}
        options={({ navigation }) => ({
          headerShadowVisible: false,
          headerTitleAlign: "center",
          drawerPosition: "right",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                props.navigation.getParent("LeftDrawer").toggleDrawer()
              }
              className="pl-3"
            >
              <MenuIcon />
            </TouchableOpacity>
          ),
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                className="pr-3"
              >
                <FilterIcon />
              </TouchableOpacity>
            );
          },
        })}
        component={BussinessScreen}
      />
    </RightDrawer.Navigator>
  );
};

const BusinessNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"BussinessScreenWithDrawer"}
        component={BussinessScreenWithDrawer}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <BusinessIcon focused={focused} />,
          headerShown: false,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          title: "Business",
        })}
      />
      <Stack.Screen
        name={routes.singleBussines}
        component={SingleBusinessScreen}
        options={({ route }) => ({
          headerTitleAlign: "center",
          headerShadowVisible: false,
          title: "Business",
        })}
      />
      <Stack.Screen
        name={routes.selectBookTime}
        component={SelectBookTimeScreen}
        options={({ route }) => ({
          headerTitleAlign: "center",
          headerShadowVisible: false,
          title: "Book Your Event",
        })}
      />
      <Stack.Screen
        name={routes.booking}
        component={BookingScreen}
        options={({ route }) => ({
          headerTitleAlign: "center",
          headerShadowVisible: false,
          title: "Book Your Event",
        })}
      />
    </Stack.Navigator>
  );
};

const Tabs = (props) => {
  const [activeTab, setActiveTab] = React.useState("Home");
  const calendarType = useSelector(
    (state: RootState) => state.calendar.calendarType
  );

  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarActiveTintColor: "black",
          headerTitleAlign: "center",
          tabBarStyle: {
            paddingBottom: Platform.OS === "ios" ? 25 : 5,
            paddingHorizontal: 12,
          },
        };
      }}
      screenListeners={({ route }) => {
        setActiveTab(route.name);
        return {};
      }}
    >
      <Tab.Screen
        name={routes.home}
        component={HomeScreen}
        options={({ route }) => ({
          title: "LOGO",
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => props.navigation.toggleDrawer()}
              className="pl-3"
            >
              <MenuIcon />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
          tabBarItemStyle: {
            borderTopWidth: route.name === activeTab ? 3 : 0,
            borderStyle: "solid",
            borderTopColor: colors.bg.primary.backgroundColor,
            gap: 0,
          },
        })}
      />
      <Tab.Screen
        name="BusinessNavigator"
        component={BusinessNavigator}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <BusinessIcon focused={focused} />,
          title: "Business",
          headerShown: false,
          tabBarItemStyle: {
            borderTopWidth: route.name === activeTab ? 3 : 0,
            borderStyle: "solid",
            borderTopColor: colors.bg.primary.backgroundColor,
            gap: 0,
          },
        })}
      />
      <Tab.Screen
        name="SearchNavigator"
        component={SearchNavigator}
        listeners={{ tabPress: () => props.navigation.navigate(routes.search) }}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <SearchIcon focused={focused} />,
          title: "Search",
          headerShown: false,
          tabBarItemStyle: {
            borderTopWidth: route.name === activeTab ? 3 : 0,
            borderStyle: "solid",
            borderTopColor: colors.bg.primary.backgroundColor,
            gap: 0,
          },
        })}
      />
      <Tab.Screen
        name={"CalendarNavigator"}
        component={CalendarNavigator}
        options={({ route, navigation }) => ({
          title: "Calendar",
          headerShown: true,
          headerShadowVisible: false,
          headerRight: () => (
            <BaseCalendarDropDown
              items={[
                { key: "Month", value: "Month" },
                { key: "Year", value: "Year" },
                { key: "Week", value: "Week" },
                { key: "Day", value: "Day" },
              ]}
              label={calendarType}
              navigation={props.navigation}
            />
          ),
          tabBarIcon: ({ focused }) => <CalendarIcon focused={focused} />,
          tabBarItemStyle: {
            borderTopWidth: route.name === activeTab ? 3 : 0,
            borderStyle: "solid",
            borderTopColor: colors.bg.primary.backgroundColor,
            gap: 0,
          },
        })}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
          title: "Profile",
          headerShown: false,
          tabBarItemStyle: {
            borderTopWidth: route.name === activeTab ? 3 : 0,
            borderStyle: "solid",
            borderTopColor: colors.bg.primary.backgroundColor,
            gap: 0,
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
