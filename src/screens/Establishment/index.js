import * as React from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import Rating from "../../components/Rating";
import Button from "../../components/Button";

import { styles } from "./styles";
import { colors, metrics } from "../../styles";

const { height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.25;

export default function Establishment({ navigation, route }) {
  const [dogSize, setDogSize] = React.useState([
    {
      id: 1,
      title: "Pequeno",
      imgUrl: require("../../../assets/images/gregs.png"),
    },
    {
      id: 2,
      title: "Médio",
      imgUrl: require("../../../assets/images/pitbull2.png"),
    },
    {
      id: 3,
      title: "Grande",
      imgUrl: require("../../../assets/images/labrador2.png"),
    },
  ]);
  const [services, SetServices] = React.useState([
    {
      id: 1,
      title: "Banho",
      duration: "40 min",
      price: "R$ 70",
    },
    {
      id: 2,
      title: "Banho seco",
      duration: "20 min",
      price: "R$ 50",
    },
    {
      id: 3,
      title: "Tosa higiênica",
      duration: "60 min",
      price: "R$ 100",
    },
    {
      id: 4,
      title: "Corte",
      duration: "60 min",
      price: "R$ 120",
    },
    {
      id: 5,
      title: "Tosa verão",
      duration: "40 min",
      price: "R$ 90",
    },
    {
      id: 6,
      title: "Banho e corte de unhas",
      duration: "50 min",
      price: "R$ 90",
    },
    {
      id: 7,
      title: "Banho e corte de unhas",
      duration: "60 min",
      price: "R$ 120",
    },
  ]);
  const [selectedDogSize, setSelectedDogSize] = React.useState(1);
  const [selectedService, setSelectedService] = React.useState(0);
  const [selectedEstablishment, setSelectedEstablishment] = React.useState([
    route.params,
  ]);
  const [arrays, setArrays] = React.useState([]);
  const size = 1;
  while (dogSize.length > 0) arrays.push(dogSize.splice(0, size));

  const renderDogSize = (item) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={
            item[0].id != selectedDogSize
              ? styles.dogSizeView
              : styles.dogSizeSelectedView
          }
          onPress={() => setSelectedDogSize(item[0].id)}
        >
          <Image
            source={item[0].imgUrl}
            style={styles.dogSizeImage}
            resizeMode="stretch"
          />
        </TouchableOpacity>
        <Text style={styles.dogSizeText}>{item[0].title}</Text>
      </View>
    );
  };

  const renderServices = (item) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={
            item.id != selectedService
              ? styles.serviceItemView
              : styles.serviceItemSelectedView
          }
          onPress={() => setSelectedService(item.id)}
        >
          <View>
            <Text
              style={
                item.id != selectedService
                  ? styles.serviceItemTitle
                  : styles.serviceItemTitleSelected
              }
            >
              {item.title}
            </Text>
            <Text
              style={
                item.id != selectedService
                  ? styles.serviceItemDuration
                  : styles.serviceItemDurationSelected
              }
            >
              {item.duration}
            </Text>
          </View>
          <View>
            <Text
              style={
                item.id != selectedService
                  ? styles.serviceItemDuration
                  : styles.serviceItemDurationSelected
              }
            >
              {item.price}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderPetShop = (item) => {
    return (
      <View style={{}}>
        <View style={styles.petShopItemImageView}>
          <Image
            source={item.imgUrl}
            style={{
              width: "100%",
              height: undefined,
              aspectRatio: 1.2,
              transform: [{ scale: 1.2 }],
            }}
            resizeMode="contain"
          />
          <View
            style={{
              paddingTop: 10,
              width: wp(100),
              paddingHorizontal: 25,
              marginTop: wp(-30),
              borderTopStartRadius: 40,
              borderTopEndRadius: 40,
              backgroundColor: colors.white,
              flex: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                // backgroundColor: colors.yellow,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Ionicons
                // style={{ backgroundColor: colors.brown }}
                name="ios-pin"
                size={35}
                color={colors.purpleDarker}
              />
              <View
                style={{
                  flex: 0.9,
                  // backgroundColor: colors.pink,
                  alignSelf: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={styles.petShopName}>{item.name}</Text>
                <Text style={styles.petShopInfos}>{item.address}</Text>
                <Text style={styles.petShopInfos}>{item.city}</Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                flex: 0.5,
                // backgroundColor: colors.wine,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.petShopName}>{item.rating}</Text>
              <View
                style={{
                  flex: 0.9,
                  // backgroundColor: colors.pink,
                  alignSelf: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Rating rate={item.rating} />
              </View>
              {/* <Text style={styles.petShopInfos}>0 avaliações</Text> */}
            </View>

            <Text style={styles.petShopInfos}>{item.openTime}</Text>
          </View>
        </View>
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
          <View style={{ marginTop: hp(3) }}>
            <View style={styles.sectionContainer}>
              <FlatList
                data={selectedEstablishment}
                keyExtractor={keyExtractor}
                renderItem={({ item, index }) => renderPetShop(item)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                getItemLayout={getItemLayout}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                position: "absolute",
                marginTop: hp(2),
                marginLeft: wp(2),
                backgroundColor: colors.darkTransparent,
                width: metrics.goBackIconSize + 7,
                borderRadius: metrics.borderRadius,
                height: metrics.goBackIconSize + 7,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="ios-arrow-back"
                size={metrics.goBackIconSize}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
        }
        data={arrays}
        keyExtractor={keyExtractor}
        // horizontal={true}
        renderItem={({ item, index }) => {}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
        ListFooterComponent={
          <View style={{ backgroundColor: colors.white }}>
            <View style={styles.sectionContainer}>
              <Text style={styles.servicesTitle}>Tamanho</Text>
              <FlatList
                data={arrays}
                keyExtractor={keyExtractor}
                horizontal={true}
                renderItem={({ item, index }) => renderDogSize(item)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                getItemLayout={getItemLayout}
              />
            </View>

            <View style={styles.separator} />

            <View style={styles.sectionContainer}>
              <Text style={styles.servicesTitle}>Serviços</Text>
              <FlatList
                data={services}
                keyExtractor={keyExtractor}
                renderItem={({ item, index }) => renderServices(item)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                getItemLayout={getItemLayout}
              />
            </View>
          </View>
        }
      />
      <Button
        styleButton={
          selectedService != 0
            ? { alignSelf: "center" }
            : { alignSelf: "center", backgroundColor: colors.grey }
        }
        // styleText={{ fontSize: 15 }}
        onPress={() => {
          selectedService != 0 ? navigation.navigate("Booking") : null;
        }}
      >
        Agendar
      </Button>
    </View>
  );
}
