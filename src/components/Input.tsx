import { StyleSheet, Text, View } from "react-native";
import React from "react";

const InputComponent = () => {
  return (
    <View style={styles.container}>
      <Text>InputComponent</Text>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
