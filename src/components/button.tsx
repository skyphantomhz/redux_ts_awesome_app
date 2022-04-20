import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";

interface Props {
  title: string;
  style: StyleProp<ViewStyle> | undefined;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const ButtonComponent = ({ title, style, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={[styles.title]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#414138",
    borderRadius: 6,
    justifyContent: "center",
    padding: 11,
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
});
