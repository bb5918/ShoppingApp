import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";

import IconFeather from "react-native-vector-icons/Feather";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconIonicons from "react-native-vector-icons/Ionicons";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

function MyPageScreen() {
  const [isLoaded] = useFonts({
    BB: require("../../Assets/fonts/BB.ttf"),
  });

  return (
    <View style={{ backgroundColor: "white" }}>
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

        <View style={{ marginTop: 50, marginLeft: 230, flexDirection: "row" }}>
          <IconFontAwesome name="bell-o" size={24} />

          <IconFontAwesome
            name="shopping-bag"
            size={24}
            color="#A9D0F5"
            style={{ marginLeft: 10 }}
          />
        </View>
      </View>
      <ScrollView>
        <TouchableOpacity
          style={{
            margin: 20,
            marginLeft: 30,
            flexDirection: "row",
          }}
        >
          <Text style={{ fontFamily: "BB", fontSize: "18" }}>
            금비님 안녕하세요!
          </Text>
          <IconFontAwesome
            style={{ marginLeft: 180 }}
            name="angle-right"
            color="#A4A4A4"
            size={24}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={{
              margin: 10,
              borderColor: "#F2F2F2",
              borderWidth: 3,
              flexDirection: "row",
            }}
          >
            <IconIonicons
              name="logo-ionic"
              size={40}
              style={{ margin: 5 }}
              color="#A9D0F5"
            />
            <Text style={{ fontFamily: "BB", margin: 15, fontSize: 18 }}>
              BLUE
            </Text>
            <Text
              style={{
                fontFamily: "BB",
                margin: 18,
                marginLeft: 180,
                fontSize: 13,
              }}
            >
              혜택 보기
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ height: 100, width: "25%", padding: 15 }}>
            <IconFeather
              name="truck"
              size={30}
              style={{ padding: 10, paddingBottom: 0 }}
            />
            <Text style={{ fontFamily: "BB", fontSize: 10, paddingLeft: 10 }}>
              주문 배송
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 100, width: "25%", padding: 15 }}>
            <IconFontAwesome
              name="commenting-o"
              size={30}
              style={{ padding: 10, paddingBottom: 0 }}
            />

            <Text style={{ fontFamily: "BB", fontSize: 10, paddingLeft: 20 }}>
              리뷰
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 100, width: "25%", padding: 15 }}>
            <IconFontAwesome
              name="newspaper-o"
              size={30}
              style={{ padding: 10, paddingBottom: 0 }}
            />
            <Text style={{ fontFamily: "BB", fontSize: 10, paddingLeft: 20 }}>
              쿠폰
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 100, width: "25%", padding: 15 }}>
            <IconFeather
              name="check-circle"
              size={30}
              style={{ padding: 10, paddingBottom: 0 }}
            />
            <Text style={{ fontFamily: "BB", fontSize: 10, paddingLeft: 15 }}>
              포인트
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 1,
            width: "90%",
            margin: 10,
            marginTop: 0,
            backgroundColor: "#E6E6E6",
          }}
        />
        <Text
          style={{
            fontFamily: "BB",
            fontSize: 15,
            marginLeft: 10,
            color: "#BDBDBD",
          }}
        >
          쇼핑
        </Text>
        <TouchableOpacity style={{ margin: 10 }}>
          <Text
            style={{
              fontFamily: "BB",
              fontSize: 20,
              margin: 10,
            }}
          >
            문의 내역
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 10 }}>
          <Text
            style={{
              fontFamily: "BB",
              fontSize: 20,
              margin: 10,
            }}
          >
            최근 본 상품
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            width: "90%",
            margin: 10,
            marginTop: 5,
            backgroundColor: "#E6E6E6",
          }}
        />
        <Text
          style={{
            fontFamily: "BB",
            fontSize: 15,
            marginLeft: 10,

            color: "#BDBDBD",
          }}
        >
          서비스 설정
        </Text>
        <TouchableOpacity style={{ margin: 10 }}>
          <Text
            style={{
              fontFamily: "BB",
              fontSize: 20,
              margin: 10,
            }}
          >
            실험실
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 10 }}>
          <Text
            style={{
              fontFamily: "BB",
              fontSize: 20,
              marginLeft: 10,
            }}
          >
            설정
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            width: "90%",
            margin: 10,
            marginTop: 5,
            backgroundColor: "#E6E6E6",
          }}
        />
        <Text
          style={{
            fontFamily: "BB",
            fontSize: 15,
            marginLeft: 10,

            color: "#BDBDBD",
          }}
        >
          고객센터
        </Text>
        <TouchableOpacity style={{ margin: 10 }}>
          <Text
            style={{
              fontFamily: "BB",
              fontSize: 20,
              margin: 10,
            }}
          >
            공지사항
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 10 }}>
          <Text
            style={{
              fontFamily: "BB",
              fontSize: 20,
              marginLeft: 10,
            }}
          >
            앱 문의
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default MyPageScreen;
