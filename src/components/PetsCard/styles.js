import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors, metrics, fontFamily } from "../../styles";

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  serviceItemView: {
    // backgroundColor: colors.purpleLight,
    // width: wp(90),
    // height: wp(25),
    // flexDirection: "row",
    // // justifyContent: "space-between",
    // alignItems: "center",
    // elevation: 2,
  },
  serviceInfosView: {
    // alignSelf: "flex-start",
    // marginTop: 15,
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
  sessionListItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: "darkgray",
  },
  action: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    width: wp(25),
    height: wp(25),
  },
  actionText: {
    color: colors.white,
    fontFamily: fontFamily.notoSans_bold,
    fontSize: metrics.fontSize15,
    alignSelf: 'center'
  },
});
