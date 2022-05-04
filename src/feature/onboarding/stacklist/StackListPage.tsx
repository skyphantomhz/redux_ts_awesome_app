import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  Button,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  Directions,
  FlingGestureHandler,
  State,
} from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;

const DATA = [
  {
    title: "Afro vibes",
    location: "Mumbai, India",
    date: "Nov 17th, 2020",
    poster:
      "https://www.creative-flyers.com/wp-content/uploads/2020/07/Afro-vibes-flyer-template.jpg",
  },
  {
    title: "Jungle Party",
    location: "Unknown",
    date: "Sept 3rd, 2020",
    poster:
      "https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg",
  },
  {
    title: "4th Of July",
    location: "New York, USA",
    date: "Oct 11th, 2020",
    poster:
      "https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg",
  },
  {
    title: "Summer festival",
    location: "Bucharest, Romania",
    date: "Aug 17th, 2020",
    poster:
      "https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg",
  },
  {
    title: "BBQ with friends",
    location: "Prague, Czech Republic",
    date: "Sept 11th, 2020",
    poster:
      "https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg",
  },
  {
    title: "Festival music",
    location: "Berlin, Germany",
    date: "Apr 21th, 2021",
    poster:
      "https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg",
  },
  {
    title: "Beach House",
    location: "Liboa, Portugal",
    date: "Aug 12th, 2020",
    poster:
      "https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg",
  },
];

const VISIBLE_ITEMS = 3;
const StackListPage = () => {
  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimation = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  const setActiveIndex = useCallback((activeIndex: number) => {
    setIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
  }, []);

  useEffect(() => {
    Animated.spring(scrollXAnimation, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  const translateY = scrollXAnimation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [40, 0, -40],
  });

  return (
    <SafeAreaView>
      <View style={{ height: "100%", width: "100%" }}>
        <View style={{ overflow: "hidden", height: 40 }}>
          <Animated.View
            style={{
              transform: [{ translateY }],
            }}
          >
            {DATA.map((item) => {
              return (
                <View style={{ height: 40, marginHorizontal: 25 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {item.title}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>{item.location}</Text>
                    <Text>{item.date}</Text>
                  </View>
                </View>
              );
            })}
          </Animated.View>
        </View>
        <FlingGestureHandler
          key="left"
          direction={Directions.LEFT}
          onHandlerStateChange={({ nativeEvent }) => {
            if (index === 0) {
              return;
            }
            if (nativeEvent.state === State.END) {
              setActiveIndex(index - 1);
            }
          }}
        >
          <FlingGestureHandler
            key="right"
            direction={Directions.RIGHT}
            onHandlerStateChange={({ nativeEvent }) => {
              if (index === DATA.length - 1) {
                return;
              }
              if (nativeEvent.state === State.END) {
                setActiveIndex(index + 1);
              }
            }}
          >
            <FlatList
              style={{ marginTop: 24 }}
              data={DATA}
              horizontal
              inverted
              contentContainerStyle={{
                flex: 1,
                justifyContent: "center",
              }}
              CellRendererComponent={({
                item,
                index,
                children,
                style,
                ...props
              }) => {
                const newStyle = [style, { zIndex: DATA.length - index }];
                return (
                  <View {...props} index={index} style={newStyle}>
                    {children}
                  </View>
                );
              }}
              scrollEnabled={false}
              renderItem={({ item, index }) => {
                const inputRange = [index - 1, index, index + 1];
                const translateX = scrollXAnimation.interpolate({
                  inputRange,
                  outputRange: [50, 0, -500],
                });
                const scale = scrollXAnimation.interpolate({
                  inputRange,
                  outputRange: [0.8, 1, 1.3],
                });
                const opacity = scrollXAnimation.interpolate({
                  inputRange,
                  outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
                });
                return (
                  <Animated.View
                    removeClippedSubviews={false}
                    style={{
                      position: "absolute",
                      opacity,
                      transform: [
                        {
                          translateX,
                        },
                        { scale },
                      ],
                      left: -150,
                    }}
                  >
                    <Image
                      style={{
                        height: ITEM_HEIGHT,
                        width: ITEM_WIDTH,
                        borderRadius: 20,
                      }}
                      source={{ uri: item.poster }}
                    />
                  </Animated.View>
                );
              }}
            />
          </FlingGestureHandler>
        </FlingGestureHandler>
        <Button
          onPress={() => {
            setIndex(index + 1);
            scrollXIndex.setValue(index);
            Animated.spring(scrollXAnimation, {
              toValue: scrollXIndex,
              useNativeDriver: true,
            }).start();
          }}
          title="Click"
        />
      </View>
    </SafeAreaView>
  );
};

export default StackListPage;

const styles = StyleSheet.create({});
function useSate(arg0: Animated.Value) {
  throw new Error("Function not implemented.");
}
