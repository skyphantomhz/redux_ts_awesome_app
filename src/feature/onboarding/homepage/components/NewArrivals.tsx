import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { newArrivalSelector } from "../NewArrivalSlice";
import { useAppSelector } from "../../../../app/hooks";
import LottieView from "lottie-react-native";
import ItemCard from "./ItemCard";
import { Rocket } from "../../../../model/rocket";

const NewArrivals = () => {
  const selector = useAppSelector(newArrivalSelector);
  console.log(selector);

  const itemRender = (element: ListRenderItemInfo<Rocket>) => {
    return <ItemCard content={element.item} />;
  };

  var contentView = <View></View>;
  if (selector.status == "loading") {
    contentView = (
      <View style={{ width: 100, height: 100, alignSelf: "center" }}>
        <LottieView
          source={require("../../../../assets/loading.json")}
          autoPlay
          loop
        />
      </View>
    );
  } else if (selector.status == "failed") {
    contentView = (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textAlign: "center" }}>Something went wrong!!</Text>
      </View>
    );
  } else if (selector.value.length > 0) {
    contentView = (
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 8, marginHorizontal: 25 }}
        data={selector.value}
        renderItem={(element) => itemRender(element)}
      />
    );

    // (
    // <View style={{ marginTop: 8, marginHorizontal: 25 }}>
    //   {selector.value.map((item: Rocket, index) => (
    //     <ItemCard content={item} />
    //   ))}
    // </View>
    // );
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 25,
          marginTop: 32,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600", color: "#141010" }}>
          New Arrivals
        </Text>
        <Text style={{ fontSize: 11, color: "#38972E" }}>See All</Text>
      </View>
      {contentView}
    </View>
  );
};

export default NewArrivals;

const styles = StyleSheet.create({});
