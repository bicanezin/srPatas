import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Image } from "react-native";
import { colors } from "../styles";

import Home from "../screens/Home";
import MyServices from "../screens/MyServices";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  let houseGrey = require("../../assets/images/house-grey.png");
  let housePurple = require("../../assets/images/house-purple.png");
  let pawGrey = require("../../assets/images/paw-grey.png");
  let pawPurple = require("../../assets/images/paw-purple.png");

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, headerLeft: false }}
      tabBarOptions={{
        activeTintColor: colors.purple,
        inactiveTintColor: colors.greyLight,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <TabBarIcon source={housePurple} />
            ) : (
              <TabBarIcon source={houseGrey} />
            ),
        }}
      />
      <BottomTab.Screen
        name="MyServices"
        component={MyServicesNavigator}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <TabBarIcon source={pawPurple} />
            ) : (
              <TabBarIcon source={pawGrey} />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon({ source }) {
  return <Image source={source} style={{ height: 30, width: 30 }} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerLeft: false }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Sr. Patas",
          headerTitleStyle: { fontFamily: "notoSans-regular" },
        }}
      />
    </HomeStack.Navigator>
  );
}

const MyServicesStack = createStackNavigator();

function MyServicesNavigator() {
  return (
    <MyServicesStack.Navigator screenOptions={{ headerLeft: false }}>
      <MyServicesStack.Screen
        name="MyServices"
        component={MyServices}
        options={{ headerTitle: "Meus agendamentos" }}
      />
    </MyServicesStack.Navigator>
  );
}
