import * as React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function MyServices() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyServices</Text>
      <View style={styles.separator} />
    </View>
  );
}
