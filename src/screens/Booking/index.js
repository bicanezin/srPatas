import * as React from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import Button from "../../components/Button";

import { styles } from "./styles";
import { colors, metrics, fontFamily } from "../../styles";

const { height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.25;

export default function Booking({ navigation, route }) {
  const [date, setDate] = React.useState([
    "31",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ]);
  const [time, setTime] = React.useState([
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:30",
  ]);
  const [selectedDate, setSelectedDate] = React.useState(0);
  const [selectedTime, setSelectedTime] = React.useState(0);
  const [arrays, setArrays] = React.useState([]);

  const renderDate = (item) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedDate(item)}
        style={
          selectedDate != item
            ? styles.dateItemView
            : styles.dateItemSelectedView
        }
      >
        <Text style={styles.dateText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderTime = (item) => {
    return (
      <View>
        <TouchableOpacity
          style={
            item != selectedTime
              ? styles.timeItemView
              : styles.timeItemSelectedView
          }
          onPress={() => setSelectedTime(item)}
        >
          <Text
            style={
              item != selectedTime ? styles.timeText : styles.timeSelectedText
            }
          >
            {item}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const getItemLayout = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });
  const keyExtractor = React.useCallback((item, index) => index.toString(), []);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.dateTimeContainer}>
            <View style={{ marginTop: hp(3) }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={styles.goBackContainer}
              >
                <Ionicons
                  name="ios-arrow-back"
                  size={metrics.goBackIconSize}
                  color={colors.black}
                />
              </TouchableOpacity>
            </View>

            <View>
              <View style={styles.sectionContainer}>
                <Text style={styles.screenTitle}>Agendar serviço</Text>
              </View>
            </View>

            <View style={styles.separator} />

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Data</Text>
              <FlatList
                data={date}
                keyExtractor={keyExtractor}
                horizontal={true}
                renderItem={({ item, index }) => renderDate(item)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                getItemLayout={getItemLayout}
              />
            </View>

            <View style={styles.separator} />

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Horario</Text>
              <FlatList
                data={time}
                keyExtractor={keyExtractor}
                numColumns={3}
                renderItem={({ item, index }) => renderTime(item)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                getItemLayout={getItemLayout}
              />
            </View>
          </View>
        }
        data={arrays}
        keyExtractor={keyExtractor}
        renderItem={({ item, index }) => {}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
        ListFooterComponent={
          <>
            <View style={styles.separator} />
          </>
        }
      />
      <Button
        styleButton={{ alignSelf: "center" }}
        onPress={() => {
          navigation.navigate("Confirm");
        }}
      >
        Confirmar
      </Button>
    </View>
  );
}
