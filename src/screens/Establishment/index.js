import * as React from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Feather";

import TInput from "../../components/TextInput";
import Rating from "../../components/Rating";
import Button from "../../components/Button";

import { styles } from "./styles";
import { colors, metrics } from "../../styles";

const { height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.25;

export default function Establishment({ navigation, route }) {
  const [services, SetServices] = React.useState([
    {
      id: 0,
      title: "Todos",
    },
    {
      id: 1,
      title: "Banho",
    },
    {
      id: 2,
      title: "Banho seco",
    },
    {
      id: 3,
      title: "Tosa higiênica",
    },
    {
      id: 4,
      title: "Corte",
    },
    {
      id: 5,
      title: "Tosa verão",
    },
    {
      id: 6,
      title: "Banho e corte de unhas",
    },
    {
      id: 7,
      title: "Banho e corte de unhas",
    },
  ]);
  const [selectedService, setSelectedService] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [selectedEstablishment, setSelectedEstablishment] = React.useState([
    route.params,
  ]);
  const [arrays, setArrays] = React.useState([]);
  const size = 2;
  while (services.length > 0) arrays.push(services.splice(0, size));

  const renderServices = (item) => {
    return (
      <View style={{}}>
        <TouchableOpacity
          style={
            item[0].id != selectedService
              ? styles.serviceItemView
              : styles.serviceItemSelectedView
          }
          onPress={() => setSelectedService(item[0].id)}
        >
          <Ionicons name="ios-cut" size={26} color={colors.greyLight} />
          <Text
            style={
              item[0].id != selectedService
                ? styles.serviceText
                : styles.serviceSelectedText
            }
          >
            {item[0].title}
          </Text>
        </TouchableOpacity>

        {item.length > 1 ? (
          <TouchableOpacity
            style={
              item[1].id != selectedService
                ? styles.serviceItemView
                : styles.serviceItemSelectedView
            }
            onPress={() => setSelectedService(item[1].id)}
          >
            <Ionicons name="ios-cut" size={24} color={colors.greyLight} />
            <Text
              style={
                item[1].id != selectedService
                  ? styles.serviceText
                  : styles.serviceSelectedText
              }
            >
              {item[1].title}
            </Text>
          </TouchableOpacity>
        ) : null}
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
              alignItems: "center",
            }}
          >
            <Text style={styles.petShopName}>{item.name}</Text>
            <Text style={styles.petShopInfos}>{item.address}</Text>
            <Text style={styles.petShopInfos}>{item.city}</Text>
            <Text style={styles.petShopInfos}>{item.openTime}</Text>
            <Rating rate={item.rating} />
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
        styleButton={{ backgroundColor: colors.green1, alignSelf: "center" }}
        styleText={{ fontSize: 15 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        Agendar
      </Button>
    </View>
  );
}
