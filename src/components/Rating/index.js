import * as React from "react";
import { View, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PropTypes from "prop-types";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "../../styles";
export default function Rating({ rate, style }) {
  let pawPurple = require("../../../assets/images/paw-purple.png");
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View>
        {rate >= 1 ? (
          <FontAwesome5
            name="paw"
            size={wp(6)}
            color={colors.purple}
            style={{ alignSelf: "center" }}
          />
        ) : (
          <Image source={pawPurple} style={{ height: wp(6), width: wp(6) }} />
        )}
      </View>
      <Text> </Text>
      <View>
        {rate >= 2 ? (
          <FontAwesome5
            name="paw"
            size={wp(6)}
            color={colors.purple}
            style={{ alignSelf: "center" }}
          />
        ) : (
          <Image source={pawPurple} style={{ height: wp(6), width: wp(6) }} />
        )}
      </View>
      <Text> </Text>
      <View>
        {rate >= 3 ? (
          <FontAwesome5
            name="paw"
            size={wp(6)}
            color={colors.purple}
            style={{ alignSelf: "center" }}
          />
        ) : (
          <Image source={pawPurple} style={{ height: wp(6), width: wp(6) }} />
        )}
      </View>
      <Text> </Text>
      <View>
        {rate >= 4 ? (
          <FontAwesome5
            name="paw"
            size={wp(6)}
            color={colors.purple}
            style={{ alignSelf: "center" }}
          />
        ) : (
          <Image source={pawPurple} style={{ height: wp(6), width: wp(6) }} />
        )}
      </View>
      <Text> </Text>
      <View>
        {rate >= 5 ? (
          <FontAwesome5
            name="paw"
            size={wp(6)}
            color={colors.purple}
            style={{ alignSelf: "center" }}
          />
        ) : (
          <Image source={pawPurple} style={{ height: wp(6), width: wp(6) }} />
        )}
      </View>
    </View>
  );
}

Rating.prototype = {
  rate: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Rating.prototype = {
  style: {},
};
