import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { RouteName } from "../../app/route";
import HomeIcon from "../../assets/icons/ic_home.svg";
import HomeActiveIcon from "../../assets/icons/ic_home_active.svg";
import ProfileIcon from "../../assets/icons/ic_profile_normal.svg";
import ProfileActiveIcon from "../../assets/icons/ic_profile_normal_active.svg";
import StarIcon from "../../assets/icons/ic_star.svg";
import StarActiveIcon from "../../assets/icons/ic_star_active.svg";
import HomeMainPage from "./homepage/HomeMainPage";
import HomePage from "./homepage/HomePage";
import ProfilePage from "./profilepage/ProfilePage";

const Tab = createBottomTabNavigator();

const OnboardingScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={RouteName.HomeMainPage}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={RouteName.HomeMainPage}
        component={HomeMainPage}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <HomeActiveIcon /> : <HomeIcon />;
          },
        }}
      />
      <Tab.Screen
        name="Star"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <StarActiveIcon /> : <StarIcon />;
          },
        }}
      />
      <Tab.Screen
        name={RouteName.Profile}
        component={ProfilePage}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <ProfileActiveIcon /> : <ProfileIcon />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
