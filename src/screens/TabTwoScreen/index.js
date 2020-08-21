import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} />
    </View>
  );
}
