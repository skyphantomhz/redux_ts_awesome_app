import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Image, SafeAreaView, StyleSheet, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { RootStackParams } from "../../app/navigation/types";
import { RouteName } from "../../app/route";
import { Rocket } from "../../model/rocket";

export type RocketDetailNavigationProps = NativeStackScreenProps<
  RootStackParams,
  RouteName.RocketDetail
>;

export interface RocketDetailParams {
  rocket: Rocket;
}

const RocketDetail = ({ navigation, route }: RocketDetailNavigationProps) => {
  return (
    <SafeAreaView>
      <Button
        title="Back to previous"
        onPress={() => {
          navigation.pop();
        }}
      />
      <View style={{ height: "100%" }}>
        <Image
          style={{ width: 100, height: 100, alignSelf: "center" }}
          source={{ uri: route.params.flickr_images[0] }}
          nativeID="description"
        />
      </View>
    </SafeAreaView>
  );
};

export default RocketDetail;

const styles = StyleSheet.create({});
