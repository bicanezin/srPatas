import * as React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import Button from "../../components/Button";

import { styles } from "./styles";
import { colors, metrics } from "../../styles";

export default function Booking({ navigation, route }) {
  return (
    <View style={[styles.container, { justifyContent: "space-between" }]}>
      <View style={{ marginTop: hp(3) }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            position: "absolute",
            marginTop: hp(2),
            marginLeft: wp(2),
            backgroundColor: colors.darkTransparent,
            width: metrics.goBackIconSize + 7,
            borderRadius: metrics.borderRadius,
            height: metrics.goBackIconSize + 7,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="ios-arrow-back"
            size={metrics.goBackIconSize}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: colors.white }}>
        <View style={styles.sectionContainer}>
          <Text style={styles.servicesTitle}>Agendar serviço</Text>
        </View>
      </View>
      <Button
        styleButton={{ alignSelf: "center" }}
        // styleText={{ fontSize: 15 }}
        onPress={() => {
          navigation.navigate("Confirm");
        }}
      >
        Confirmar
      </Button>
    </View>
  );
}
