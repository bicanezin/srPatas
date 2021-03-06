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

import TInput from "../../components/TextInput";
import Rating from "../../components/Rating";

import { styles } from "./styles";
import { colors } from "../../styles";

const { height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.25;

export default function Home({ navigation, route }) {
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
  const [petShop, setPetShop] = React.useState([
    {
      id: 1,
      name: "Pet shop quatro patas",
      address: "Avenida Higienopolis, 10",
      city: "Londrina",
      openTime: "Horário de atendimento das 08 as 19hrs",
      rating: 5,
      imgUrl: require("../../../assets/images/dog_shower.jpg"),
    },
    {
      id: 2,
      name: "Republica pet",
      address: "Avenida Adhemar Pereira de Barros, 100",
      city: "Londrina",
      openTime: "Horário de atendimento das 08 as 19hrs",
      rating: 0,
      imgUrl: require("../../../assets/images/dog_shower.jpg"),
    },
    {
      id: 3,
      name: "Pet shop amicão",
      address: "Avenida Higienopolis, 10",
      city: "Londrina",
      openTime: "Horário de atendimento das 08 as 19hrs",
      rating: 2,
      imgUrl: require("../../../assets/images/dog_shower.jpg"),
    },
    {
      id: 4,
      name: "Pet shop doguinho",
      address: "Avenida Higienopolis, 10",
      city: "Londrina",
      openTime: "Horário de atendimento das 08 as 19hrs",
      rating: 3,
      imgUrl: require("../../../assets/images/dog_shower.jpg"),
    },
    {
      id: 5,
      name: "Pet do Gregs",
      address: "Avenida Higienopolis, 10",
      city: "Londrina",
      openTime: "Horário de atendimento das 08 as 19hrs",
      rating: 1,
      imgUrl: require("../../../assets/images/dog_petShop.jpg"),
    },
  ]);
  const [search, setSearch] = React.useState("");
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
          {item[0].id != 0 ? (
            <Ionicons name="ios-cut" size={26} color={colors.greyLight} />
          ) : null}
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Establishment", {
              id: item.id,
              name: item.name,
              address: item.address,
              city: item.city,
              openTime: item.openTime,
              rating: item.rating,
              imgUrl: item.imgUrl,
            });
          }}
          style={styles.petShopItemView}
        >
          <View style={styles.petShopItemImageView}>
            <Image
              source={item.imgUrl}
              style={{
                width: wp(35),
                height: wp(30),
                // flex: 1,
                alignSelf: "center",
              }}
              resizeMode="stretch"
            />
            <View
              style={{
                marginLeft: wp(2),
                // backgroundColor: colors.green,
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
          <>
            <View style={styles.textInputView}>
              <TInput
                icon="ios-search"
                value={search}
                label="O que você está procurando?"
                placeholder="Tosa"
                onChangeText={setSearch}
                returnKeyType="next"
                autoCapitalize="words"
              />
            </View>

            <View style={styles.separator} />
          </>
        }
        data={arrays}
        keyExtractor={keyExtractor}
        // horizontal={true}
        renderItem={({ item, index }) => {}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
        ListFooterComponent={
          <>
            <View style={styles.sectionContainer}>
              <Text style={styles.servicesTitle}>Serviços</Text>
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

            <View style={styles.separator} />

            <View style={styles.sectionContainer}>
              <Text style={styles.servicesTitle}>Pet shops</Text>
              <FlatList
                data={petShop}
                keyExtractor={keyExtractor}
                renderItem={({ item, index }) => renderPetShop(item)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                getItemLayout={getItemLayout}
              />
            </View>
          </>
        }
      />
    </View>
  );
}
