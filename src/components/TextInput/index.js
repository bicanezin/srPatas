import React, { forwardRef } from "react"; // forwardRef para usar 'ref'

import { View } from "react-native";
import { TextInput } from "react-native-paper";
// import Icon from "react-native-vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

import { colors } from "../../styles";
import { styles } from "./styles";

function TInput(
  {
    style,
    label,
    icon,
    keyboardType,
    autoCapitalize,
    ...rest
  },
  ref
) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {!!icon && <Ionicons name={icon} size={21} color={colors.greyDarker} />}
        <TextInput
          {...rest}
          ref={ref}
          label={label}
          keyboardType={keyboardType}
          placeholderTextColor={colors.purpleDarker}
          autoCapitalize={autoCapitalize}
          // autoCorrect={false}
          style={[styles.TInput, style]}
          underlineColor={colors.greyLight}
          underlineColorAndroid={colors.greyLight}
          selectionColor={colors.purpleLight}
          dense={true}
        />
      </View>
    </View>
  );
}

export const MemoTInput = React.memo(TInput);

// validação das props
TInput.prototype = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), //style OU é um objeto OU um array com vários objetos
  label: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
};

TInput.prototype = {
  // declaro o que não é obrigatório
  icon: null,
  style: {},
  label: null,
  keyboardType: "default",
  autoCapitalize: "sentences",
};

export default forwardRef(TInput);
