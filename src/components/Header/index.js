import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { styles } from './styles';
import { colors } from '../../styles';

export default function Header({
  iconLeft,
  iconRight,
  iconRightName,
  style,
  children,
  color,
  colorRight,
  ...rest
}) {
  const navigation = useNavigation();
  return (
    <View {...rest} style={[styles.container, style]}>
      {iconLeft == true ? (
        <TouchableOpacity
          onPress={() => {
            navigation.canGoBack() == true
              ? navigation.goBack()
              : // : navigation.navigate("Home")
                // console.log('não tem como dar back');
                null;
          }}>
          <Icon
            name="arrow-left"
            size={wp('10%')}
            color={color}
            style={{ flex: 1 }}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ flex: 1 }} />
      )}
      <Text style={[styles.buttonText, style, { color: color }]}>
        {children}
      </Text>
      {/* se for deixar só o titulo e posicionado no começo: aumentar flex */}
      {iconRight == true ? (
        <TouchableOpacity
          onPress={() => {
            navigation.canGoBack() == true
              ? navigation.goBack()
              : // : navigation.navigate("Home")
                // console.log('não tem como dar back');
                null;
          }}
          style={{ flex: 1, alignItems: 'flex-end' }}>
          <Icon
            name={iconRightName}
            size={wp('8%')}
            color={colorRight}
            // style={{ flex: 1 }}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ flex: 1 }} />
      )}
    </View>
  );
}

// validação das props
Header.prototype = {
  children: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), //style OU é um objeto OU um array com vários objetos
  arrowLeft: PropTypes.bool,
  arrowRight: PropTypes.bool,
  color: PropTypes.string.isRequired,
  iconRightName: PropTypes.string,
  colorRight: PropTypes.string,
};

Header.prototype = {
  // declaro o que não é obrigatório
  style: {},
  arrowLeft: false,
  arrowRight: false,
  iconRightName: 'arrow-left',
  colorRight: 'black',
};
