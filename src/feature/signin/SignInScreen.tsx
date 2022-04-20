import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const SignInScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.containerTitle}>
          <Text style={styles.titleScreen}>Sign</Text>
          <Text style={[styles.titleScreen, { color: "#38972E" }]}>IN</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  containerTitle: {
    flexDirection: "row",
    marginStart: 25,
    position: "absolute",
    top: 126,
  },
  titleScreen: {
    fontWeight: "500",
    fontSize: 40,
  },
});
