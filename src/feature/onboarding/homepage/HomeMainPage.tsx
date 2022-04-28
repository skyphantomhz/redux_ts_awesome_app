import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./HomePage";
import RocketDetail from "../../rocketdetail/RocketDetail";
import { RouteName } from "../../../app/route";

const homeMainNavigation = createNativeStackNavigator();

const HomeMainPage = () => {
  return (
    <homeMainNavigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <homeMainNavigation.Screen
        name={RouteName.HomePage}
        component={HomePage}
      />
      <homeMainNavigation.Screen
        name={RouteName.RocketDetail}
        component={RocketDetail}
      />
    </homeMainNavigation.Navigator>
  );
};

export default HomeMainPage;

const styles = StyleSheet.create({});
