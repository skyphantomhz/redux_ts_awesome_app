import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";

const ProfilePage = () => {
  return (
    <SafeAreaView>
      <View style={{ height: "100%", backgroundColor: "green" }}>
        <View style={{ flex: 1, backgroundColor: "red" }}>
          <Text style={{ alignSelf: "center" }}>Profile</Text>
        </View>
        <View style={{ height: 100 }}></View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({});
