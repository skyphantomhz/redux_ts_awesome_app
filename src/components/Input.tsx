import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedback,
} from "react-native";
import React, { createRef, RefObject } from "react";

interface Props {
  style: StyleProp<ViewStyle> | undefined;
  children: JSX.Element | undefined;
  placeholder: string;
  text: string | undefined;
  onChangeText: (text: string) => void;
}

const InputComponent = ({
  style,
  children,
  placeholder,
  text,
  onChangeText,
}: Props) => {
  const inputRef: RefObject<TextInput> = createRef();
  const onPress = () => {
    inputRef?.current?.focus();
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        {children}
        <TextInput
          ref={inputRef}
          style={styles.inputText}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
  inputText: {
    marginStart: 20,
    fontSize: 16,
  },
});
