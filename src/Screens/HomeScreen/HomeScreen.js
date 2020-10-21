import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Best from "./Sections/Best";
import Home from "./Sections/Home";
import New from "./Sections/New";

import IconFeather from "react-native-vector-icons/Feather";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

const initialLayout = { width: Dimensions.get("window").width };

function HomeScreen() {
  const [isLoaded] = useFonts({
    BB: require("../../Assets/fonts/BB.ttf"),
  });

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "홈" },
    { key: "second", title: "베스트" },
    { key: "third", title: "신상" },
  ]);

  const renderScene = SceneMap({
    first: Home,
    second: Best,
    third: New,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "black" }}
      style={{ backgroundColor: "white" }}
      renderLabel={({ route }) => (
        <Text
          style={{
            color: "black",
            fontFamily: "BB",
          }}
        >
          {route.title}
        </Text>
      )}
    />
  );

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <View
          style={{
            height: 80,
            flexDirection: "row",
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              marginTop: 50,
              marginLeft: 20,
              fontSize: 20,
              fontWeight: "500",
              fontFamily: "BB",
            }}
          >
            금비샵
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 50,
              marginLeft: 20,
              backgroundColor: "#F2F2F2",
              paddingLeft: 10,
              paddingTop: 5,
              paddingRight: 5,
              borderRadius: 20,
              width: 220,
            }}
          >
            <IconFeather name="search" size={18} color="#BDBDBD" />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                marginTop: 2,
                color: "#BDBDBD",
              }}
            >
              검색어를 입력해주세요
            </Text>
          </View>
          <View style={{ marginTop: 50, marginLeft: 20 }}>
            <IconFontAwesome name="shopping-bag" size={24} color="#A9D0F5" />
          </View>
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </>
    );
  }
}

export default HomeScreen;
