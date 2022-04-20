import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import InputComponent from "../../components/Input";

import EmailIcon from "../../assets/icons/ic_email.svg";
import LockIcon from "../../assets/icons/ic_lock.svg";
import ButtonComponent from "../../components/button";
import { RootStackParams } from "../../app/navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteName } from "../../app/route";

export type SignInNavigationProps = NativeStackScreenProps<
  RootStackParams,
  RouteName.SignIn
>;

const SignInScreen = ({ navigation }: SignInNavigationProps) => {
  const [email, setEmail] = useState<string>();
  const [password, setPasswrod] = useState<string>();
  const onSignIn = () => {
    navigation.navigate("SignUp", { email: email ?? "" });
  };
  const onSignUp = () => {
    navigation.navigate("SignUp", { email: email ?? "" });
  };
  return (
    <SafeAreaView>
      <View style={{ height: "100%" }}>
        <View style={styles.containerTitle}>
          <Text style={styles.titleScreen}>Sign&#32;</Text>
          <Text style={[styles.titleScreen, { color: "#38972E" }]}>IN</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            alignSelf: "center",
            alignContent: "center",
            width: "100%",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <InputComponent
            style={{}}
            placeholder="Email"
            text={email}
            onChangeText={setEmail}
          >
            <EmailIcon width="24" height="24" />
          </InputComponent>
          <InputComponent
            style={{ marginTop: 34 }}
            placeholder="Password"
            text={email}
            onChangeText={setEmail}
          >
            <LockIcon width="24" height="24" />
          </InputComponent>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }} />
          <ButtonComponent
            style={{ marginHorizontal: 25 }}
            title="Sign In"
            onPress={onSignIn}
          />
          <View style={{ flex: 1 }} />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.bottomText}>Don’t have account?&#32;</Text>
            <TouchableOpacity onPress={onSignUp}>
              <Text style={[styles.bottomText, { color: "#38972E" }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
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
    flex: 1,
    alignItems: "center",
  },
  titleScreen: {
    fontWeight: "500",
    fontSize: 40,
  },
  bottomText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#828282",
  },
});
