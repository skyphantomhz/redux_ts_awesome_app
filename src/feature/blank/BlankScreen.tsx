import React, { useRef, useState } from "react";
import {
  Animated,
  Button,
  LayoutAnimation,
  PanResponder,
  SafeAreaView,
  StyleSheet,
  UIManager,
  View,
} from "react-native";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const BlankScreen = () => {
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const [scaleAnim, setScaleAnim] = useState<number>(100);

  const positionAnim = useRef(new Animated.ValueXY()).current;

  const span = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove:
        // (
        //   e: GestureResponderEvent,
        //   gestureState: PanResponderGestureState
        // ) => {
        //   positionAnim.setValue({ x: gestureState.dx, y: gestureState.dy });
        // },

        Animated.event([null, { dx: positionAnim.x, dy: positionAnim.y }]),

      onPanResponderRelease: () => {
        Animated.spring(positionAnim, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  const animatedController = useRef(
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 10000,
      delay: 1000,
      useNativeDriver: false,
    })
  ).current;
  console.log("On rerender: " + scaleAnim);
  return (
    <SafeAreaView>
      <View style={{ height: "100%" }}>
        <Animated.Text
          style={{
            alignSelf: "center",
            backgroundColor: "red",
            padding: 10,
            opacity: opacityAnim,
          }}
        >
          BlankScreen
        </Animated.Text>

        <Button
          title="Fade animation"
          onPress={() => {
            LayoutAnimation.spring();
            // const sizeAfterScale = scaleAnim + 15;
            // setScaleAnim(sizeAfterScale);
          }}
        />
        <Button
          title="Reset size"
          onPress={() => {
            LayoutAnimation.spring();
            setScaleAnim(100);
          }}
        />

        <View style={{ flex: 1, justifyContent: "center" }}>
          <View
            style={{
              height: scaleAnim,
              width: scaleAnim,
              alignSelf: "center",
              backgroundColor: "red",
              // opacity: opacityAnim,
              // transform: [
              //   { translateX: positionAnim.x },
              //   { translateY: positionAnim.y },
              // ],
            }}
            // {...span.panHandlers}
          ></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BlankScreen;

const styles = StyleSheet.create({});
