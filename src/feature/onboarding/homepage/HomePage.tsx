import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import MenuIcon from "../../../assets/icons/ic_category.svg";
import CartIcon from "../../../assets/icons/ic_cart.svg";
import SearchIcon from "../../../assets/icons/ic_search_small.svg";
import FilterIcon from "../../../assets/icons/ic_filter.svg";

import InputComponent from "../../../components/Input";
import NewArrivals from "./components/NewArrivals";
import { useAppDispatch } from "../../../app/hooks";
import { onFetchNewArrivals } from "./NewArrivalSlice";
import { ScrollView } from "react-native";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState<string>();
  const onFilterPress = () => {
    dispatch(onFetchNewArrivals());
  };

  useEffect(() => {
    dispatch(onFetchNewArrivals());
  });
  return (
    <SafeAreaView>
      <View style={{ height: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginStart: 25,
            marginEnd: 24,
            marginBottom: 8,
          }}
        >
          <MenuIcon />
          <Text
            style={{
              flex: 1,
              alignContent: "center",
              textAlign: "center",
              fontSize: 17,
              fontWeight: "600",
            }}
          >
            Discover
          </Text>
          <CartIcon />
        </View>

        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        {/* <View> */}
        <View
          style={{
            marginTop: 26,
            marginHorizontal: 25,
            flexDirection: "row",
          }}
        >
          <InputComponent
            style={{ paddingVertical: 14, paddingHorizontal: 18, flex: 1 }}
            placeholder="Search"
            text={keyword}
            onChangeText={setKeyword}
          >
            <SearchIcon />
          </InputComponent>
          <TouchableOpacity onPress={onFilterPress}>
            <View
              style={{
                width: 50,
                height: 50,
                marginStart: 12,
                borderRadius: 6,
                backgroundColor: "#141010",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FilterIcon />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 32,
            justifyContent: "space-between",
            marginHorizontal: 25,
          }}
        >
          {categotyComponent(
            "https://i.ibb.co/8zggkNN/mobile-1.png",
            "Smartphone",
            36
          )}
          {categotyComponent(
            "https://i.ibb.co/vHRDLQ7/mobile-2.png",
            "Headphones",
            36
          )}
        </View>
        <NewArrivals />
        {/* </View>
        </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

// https://i.ibb.co/8zggkNN/mobile-1.png
// https://i.ibb.co/vHRDLQ7/mobile-2.png

export default HomePage;

export const categotyComponent = (url: string, name: string, count: number) => {
  return (
    <View
      style={{
        paddingHorizontal: 13,
        paddingVertical: 10,
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",
      }}
    >
      <Image source={{ uri: url }} style={{ aspectRatio: 1, height: 110 }} />
      <Text style={{ fontSize: 15, marginTop: 6, color: "#141010" }}>
        {name}
      </Text>
      <Text style={{ fontSize: 11, marginTop: 5, color: "#828282" }}>
        {count} items
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
