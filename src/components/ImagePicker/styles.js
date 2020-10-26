import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { normalize } from "../../styles/metrics";
import { colors, fontFamily, metrics } from "../../styles";

export const styles = StyleSheet.create({
  alterImageText: {
    alignSelf: "center",
    color: colors.blue,
    fontSize: metrics.fontSize12,
    fontFamily: fontFamily.notoSans_medium,
    textDecorationLine: "underline",
  },
});
