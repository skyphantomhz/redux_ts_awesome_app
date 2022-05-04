/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./src/feature/signin/SignInScreen";
import SignUpScreen from "./src/feature/signup/SignUpScreen";
import { RootStackParams } from "./src/app/navigation/types";
import { RouteName } from "./src/app/route";
import OnboardingScreen from "./src/feature/onboarding/OnboardingScreen";
import BlankScreen from "./src/feature/blank/BlankScreen";
import RocketDetail from "./src/feature/rocketdetail/RocketDetail";

const Stack = createNativeStackNavigator<RootStackParams>();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={RouteName.Onboarding}>
          <Stack.Screen
            name={RouteName.SignIn}
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={RouteName.SignUp}
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={RouteName.Onboarding}
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={RouteName.Blank}
            component={BlankScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
