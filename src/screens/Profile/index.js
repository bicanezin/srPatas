import * as React from "react";
import { View } from "react-native";
import { styles } from "./styles";

import LongText from "../../components/LongText";

export default function Profile({ navigation, route }) {
  return (
    <View style={styles.container}>
      <LongText
        label="Descrição"
        content="aaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssaaaaaaaaaaaaaaaa"
      />
    </View>
  );
}
