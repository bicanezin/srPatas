import * as React from "react";
import { ActivityIndicator, Text, Animated, Dimensions } from "react-native";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import PropTypes from "prop-types";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { styles } from "./styles";
import { colors, metrics } from "../../styles";
export default function Button({
  styleButton,
  styleText,
  children,
  loadingButton,
  isLoading,
  ...rest
}) {
  // ...rest são todas as outras propriedades que ele pode receber
  // children é todo o conteúdo dentro da TAG button

  return (
    <>
      <RectButton style={[styles.container, styleButton]} {...rest}>
        <Text style={[styles.buttonText, styleText]}>{children}</Text>
      </RectButton>
    </>
  );
}

// validação das props
Button.prototype = {
  loadingButton: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.string.isRequired,
  styleButton: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), //style OU é um objeto OU um array com vários objetos
  styleText: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Button.prototype = {
  // declaro o que não é obrigatório
  loadingButton: false,
  isLoading: false,
  styleButton: {},
  styleText: {},
};

Button.defaultProps = {
  styleButton: { width: wp("80%"), borderRadius: metrics.borderRadius },
};
