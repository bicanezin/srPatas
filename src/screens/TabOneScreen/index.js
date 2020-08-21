import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
    </View>
  );
}
