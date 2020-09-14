import React, { useState, forwardRef } from 'react';

import { View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { colors } from '../../styles';
import { styles } from './styles';

// import { TouchableOpacity } from 'react-native-gesture-handler';

function PasswordInput(
  {
    style,
    label,
    icon,
    keyboardType,
    ...rest
  },
  ref
) {
  const [secureTextEntry, setSecure] = useState(true);
  const [iconName, setIconName] = useState('visibility');

  const onIconPress = () => {
    secureTextEntry ? setIconName('visibility-off') : setIconName('visibility');

    setSecure(!secureTextEntry);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.formView}>
        {!!icon && <Icon name={icon} size={22} color={colors.greyDarker} />}
        <TextInput
          {...rest}
          ref={ref}
          label={label}
          keyboardType={keyboardType}
          placeholderTextColor={colors.orange}
          autoCapitalize="none"
          textContentType="none"
          autoCorrect={false}
          secureTextEntry={secureTextEntry}
          style={[styles.textInput, style]}
          underlineColor={colors.greyLight}
          underlineColorAndroid={colors.greyLight}
          selectionColor={colors.orangeLight}
          dense={true}
        />

        <View style={styles.iconView}>
          <TouchableOpacity onPress={onIconPress}>
            <Icon name={iconName} size={22} color={colors.greyLight} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// validação das props
PasswordInput.prototype = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), //style OU é um objeto OU um array com vários objetos
  label: PropTypes.string,
  keyboardType: PropTypes.string,
};

PasswordInput.prototype = {
  // declaro o que não é obrigatório
  icon: null,
  style: {},
  label: null,
  keyboardType: 'default',
};

export default forwardRef(PasswordInput);
