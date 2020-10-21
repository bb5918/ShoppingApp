import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import Swiper from "react-native-swiper";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

import Spacer from "../../../Components/Spacer";
import DATA from "./sampleData";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

const styles = StyleSheet.create({
  wrapper: {
    height: 80,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECCEF5",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A9D0F5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A9F5A9",
  },
});

const Item = ({ item, onPress, style, navigation }) => (
  <TouchableOpacity style={{ margin: 10, marginBottom: 0, flex: 1 }}>
    <Image
      style={{
        height: 200,
        width: null,
        resizeMode: "cover",
        borderRadius: 10,
      }}
      source={item.image}
    />
    <View style={{ margin: 5 }}>
      <Text style={{ fontFamily: "BB" }}>{item.name}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontFamily: "BB", marginRight: 5 }}>{item.price}</Text>
        <IconFontAwesome name="shopping-bag" size={16} color="#A9D0F5" />
      </View>
    </View>
  </TouchableOpacity>
);

const Home = ({ navigation }) => {
  const [isLoaded] = useFonts({
    BB: require("../../../Assets/fonts/BB.ttf"),
  });

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <Item
        navigation={navigation}
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <View style={{ margin: 10 }}>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            paginationStyle={{ bottom: -20 }}
            dot={<View style={{}} />}
            activeDot={<View style={{}} />}
          >
            <View style={styles.slide1}></View>
            <View style={styles.slide2}></View>
            <View style={styles.slide3}></View>
          </Swiper>
        </View>

        <Text style={{ marginLeft: 10, fontFamily: "BB", fontSize: 15 }}>
          금비님을 위한 추천 아이템
        </Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Image
            style={{
              height: 200,
              width: "30%",
              resizeMode: "cover",
              borderRadius: 10,
              marginLeft: 10,
            }}
            source={require("../../../Assets/images/20.png")}
          />
          <Image
            style={{
              height: 200,
              width: "30%",
              resizeMode: "cover",
              borderRadius: 10,
              marginLeft: 10,
            }}
            source={require("../../../Assets/images/21.png")}
          />
          <Image
            style={{
              height: 200,
              width: "30%",
              resizeMode: "cover",
              borderRadius: 10,
              marginLeft: 10,
            }}
            source={require("../../../Assets/images/22.jpeg")}
          />
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
