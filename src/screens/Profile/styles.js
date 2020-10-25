import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { colors, fontFamily, metrics } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    // justifyContent: "center",
  },
  separator: {
    marginVertical: wp(4),
    height: 1,
    width: "80%",
  },
});
