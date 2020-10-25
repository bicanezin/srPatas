import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import Button from "../../components/Button";

import { styles } from "./styles";
import { colors, metrics } from "../../styles";

export default function Confirm({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View />

      <View style={{ alignItems: "center" }}>
        <Ionicons
          name="ios-checkmark-circle-outline"
          size={150}
          color={colors.green}
        />

        <View style={styles.separator} />

        <View style={styles.sectionContainer}>
          <Text style={styles.successTitle}>SUCESSO</Text>
          <Text style={styles.subText}>YAY! O serviço foi agendado.</Text>
          <Text style={styles.subText}>O seu pet irá ficar limpinho!</Text>
        </View>
      </View>

      <Button
        styleButton={{ alignSelf: "center" }}
        // styleText={{ fontSize: 15 }}
        onPress={() => {
          navigation.replace("Root", { screen: "MyServices" });
        }}
      >
        Ver meus agendamentos
      </Button>
    </View>
  );
}
