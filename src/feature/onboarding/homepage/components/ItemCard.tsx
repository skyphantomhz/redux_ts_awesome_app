import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Rocket } from "../../../../model/rocket";

interface Props {
  content: Rocket;
}

const ItemCard = ({ content }: Props) => {
  const firstImage = content?.flickr_images[0];
  return (
    <View
      style={{
        borderRadius: 15,
        backgroundColor: "white",
        flexDirection: "row",
        marginVertical: 8,
      }}
    >
      <View
        style={{
          borderRadius: 15,
          backgroundColor: "#ECE9F1",
          rotation: 1,
          alignItems: "center",
          padding: 14,
        }}
      >
        <Image style={{ width: 72, height: 72 }} source={{ uri: firstImage }} />
      </View>
      <View style={{ paddingHorizontal: 10, paddingVertical: 14, flex: 1 }}>
        <Text style={{ fontWeight: "600", fontSize: 16, color: "#1F272E" }}>
          {content.rocket_name}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 7 }}>
          <Text
            style={{
              flexDirection: "row",
              marginStart: 5,
              fontSize: 11,
              color: "#828282",
            }}
          >
            {content.first_flight}
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "600",
            marginTop: 10,
            fontSize: 14,
            color: "#38972E",
          }}
        >
          344 AED
        </Text>

        <View
          style={{
            position: "absolute",
            right: 10,
            top: "50%",
            backgroundColor: "#38972E",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 32,
          }}
        >
          <Text style={{ color: "white", fontSize: 11 }}>Shop Now</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({});
