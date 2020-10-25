import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { colors, fontFamily, metrics } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: colors.white,
    flex: 1,
    // justifyContent: "center",
  },
});
