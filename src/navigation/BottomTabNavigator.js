import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Image } from "react-native";
import { colors, fontFamily, metrics } from "../styles";

import Home from "../screens/Home";
import MyServices from "../screens/MyServices";
import Profile from "../screens/Profile";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  let houseGrey = require("../../assets/images/house-grey.png");
  let housePurple = require("../../assets/images/house-purple.png");
  let pawGrey = require("../../assets/images/paw-grey.png");
  let pawPurple = require("../../assets/images/paw-purple.png");
  let userGrey = require("../../assets/images/user-grey.png");
  let userPurple = require("../../assets/images/user-purple.png");

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
        name="Agenda"
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
      <BottomTab.Screen
        name="Perfil"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <TabBarIcon source={userPurple} />
            ) : (
              <TabBarIcon source={userGrey} />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon({ source }) {
  return <Image source={source} style={{ height: 30, width: 30 }} />;
}

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerLeft: false }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Sr. Patas",
          headerTitleStyle: {
            fontFamily: fontFamily.notoSans_medium,
            fontSize: metrics.fontSize20,
          },
          headerStyle: {
            borderBottomWidth: 0.1,
            borderBottomColor: colors.purpleDarker,
          },
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
        options={{
          headerTitle: "Meus agendamentos",
          headerTitleStyle: {
            fontFamily: fontFamily.notoSans_medium,
            fontSize: metrics.fontSize18,
          },
          headerStyle: {
            borderBottomWidth: 0.1,
            borderBottomColor: colors.purpleDarker,
          },
        }}
      />
    </MyServicesStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerLeft: false }}>
      <ProfileStack.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
}
