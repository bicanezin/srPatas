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
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  dogSizeView: {
    backgroundColor: colors.purpleLight,
    width: wp(26),
    height: wp(28),
    marginBottom: wp(4),
    borderRadius: metrics.borderRadius,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    marginRight: wp(5),
  },
  dogSizeSelectedView: {
    backgroundColor: colors.purpleLight,
    width: wp(26),
    height: wp(28),
    marginBottom: wp(4),
    borderRadius: metrics.borderRadius,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    marginRight: wp(5),
    borderColor: colors.purple,
    borderWidth: 2,
  },
  serviceItemView: {
    backgroundColor: colors.purpleLight,
    width: wp(90),
    height: wp(25),
    paddingHorizontal: 10,
    flexDirection: "row",
    // justifyContent: "space-between",
    marginBottom: wp(4),
    borderRadius: metrics.borderRadius,
    alignItems: "center",
    elevation: 2,
    marginRight: wp(5),
  },
  dogImageView: {
    marginLeft: -15,
    width: wp(30),
    height: wp(30),
  },
  dogImage: {
    borderColor: colors.purple,
    width: wp(30),
    height: wp(30),
    // flex: 1,
    // alignSelf: "center",
  },
  serviceInfosView: {
    alignSelf: "flex-start",
    marginTop: 15,
  },
  serviceItemTitle: {
    marginRight: wp(5),
    // alignSelf: "flex-start",
    color: colors.purpleDarker,
    fontSize: metrics.fontSize15,
    fontFamily: fontFamily.notoSans_bold,
  },
  serviceItemStatus: {
    marginTop: 5,
    marginRight: wp(5),
    alignSelf: "flex-start",
    color: colors.purpleDarker,
    fontSize: metrics.fontSize11,
    fontFamily: fontFamily.notoSans_bold,
  },
  serviceItemDateTime: {
    marginTop: 5,
    marginRight: wp(5),
    alignSelf: "flex-start",
    color: colors.purpleDarker,
    fontSize: metrics.fontSize12,
    fontFamily: fontFamily.notoSans_regular,
  },
  serviceItemPriceView: {
    position: "absolute",
    right: -5,
    alignSelf: "flex-start",
    marginTop: 15,
  },
  serviceItemPrice: {
    marginRight: wp(5),
    alignSelf: "flex-start",
    color: colors.green,
    fontSize: metrics.fontSize15,
    fontFamily: fontFamily.notoSans_bold,
  },
});
