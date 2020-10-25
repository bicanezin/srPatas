import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Establishment from "../screens/Establishment";
import Booking from "../screens/Booking";
import Confirm from "../screens/Confirm";

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
    // linking={LinkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={"Login"}
      screenOptions={{ headerShown: false, headerLeft: false }}
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Establishment" component={Establishment} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Confirm" component={Confirm} />
    </Stack.Navigator>
  );
}
