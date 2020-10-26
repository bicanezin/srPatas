import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";


import { styles } from "./styles";

const PetsCard = ({ session, deleteSession, navigation }) => {
  
  function DeleteButton({ progress, dragX, onPress }) {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <TouchableOpacity
        style={[styles.action, { backgroundColor: "red" }]}
        onPress={onPress}
      >
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
          Deletar
        </Animated.Text>
      </TouchableOpacity>
    );
  }

  return (
    <Swipeable
      renderRightActions={(progress, dragX) => (
        <DeleteButton
          progress={progress}
          dragX={dragX}
          onPress={() => deleteSession(session)}
        />
      )}
    >
      <TouchableOpacity
        style={styles.sessionListItem}
        // onPress={() => navigation.navigate('SessionInfo', { book, session })}
      >
        <View style={styles.itemContainer}>
          <View style={styles.serviceItemView}>
            <View style={styles.serviceInfosView}>
              <Text style={styles.serviceItemTitle}>Nome</Text>
              <Text style={styles.serviceItemStatus}>Raça</Text>
              <Text style={styles.serviceItemDateTime}>Peso</Text>
            </View>
            <View style={styles.serviceItemPriceView}>
              <Text style={styles.serviceItemPrice}>Oi</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );

  // return (
  //   <View style={styles.itemContainer}>
  //     <View style={styles.serviceItemView}>
  //       <View style={styles.serviceInfosView}>
  //         <Text style={styles.serviceItemTitle}>Nome</Text>
  //         <Text style={styles.serviceItemStatus}>Raça</Text>
  //         <Text style={styles.serviceItemDateTime}>Peso</Text>
  //       </View>
  //       <View style={styles.serviceItemPriceView}>
  //         <Text style={styles.serviceItemPrice}>Oi</Text>
  //       </View>
  //     </View>
  //   </View>
  // );
};

export default PetsCard;
