import * as React from "react";
import { Text, View, FlatList, Dimensions, Image } from "react-native";
import { styles } from "./styles";

const { height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.25;

export default function MyServices({ navigation, route }) {
  const [services, SetServices] = React.useState([
    {
      id: 1,
      title: "Banho",
      status: "CONFIRMADO",
      dateTime: "04/08/2020 as 10:00",
      price: "R$ 70",
      imgUrl: require("../../../assets/images/gregs.png"),
    },
    {
      id: 2,
      title: "Banho seco",
      status: "CONFIRMADO",
      dateTime: "25/08/2020 as 15:00",
      price: "R$ 50",
      imgUrl: require("../../../assets/images/pitbull2.png"),
    },
    {
      id: 3,
      title: "Tosa higiênica",
      status: "CONFIRMADO",
      dateTime: "31/08/2020 as 16:40",
      price: "R$ 100",
      imgUrl: require("../../../assets/images/labrador2.png"),
    },
  ]);

  const renderServices = (item) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.serviceItemView}>
          <View style={styles.dogImageView}>
            <Image
              source={item.imgUrl}
              style={styles.dogImage}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.serviceInfosView}>
            <Text style={styles.serviceItemTitle}>{item.title}</Text>
            <Text style={styles.serviceItemStatus}>{item.status}</Text>
            <Text style={styles.serviceItemDateTime}>{item.dateTime}</Text>
          </View>
          <View style={styles.serviceItemPriceView}>
            <Text style={styles.serviceItemPrice}>{item.price}</Text>
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
      <View style={styles.separator} />
      <FlatList
        data={services}
        keyExtractor={keyExtractor}
        // horizontal={true}
        renderItem={({ item, index }) => renderServices(item)}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
      />
    </View>
  );
}
