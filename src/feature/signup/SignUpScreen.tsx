import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import InputComponent from "../../components/Input";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import EmailIcon from "../../assets/icons/ic_email.svg";
import LockIcon from "../../assets/icons/ic_lock.svg";
import ProfileIcon from "../../assets/icons/ic_profile.svg";
import ButtonComponent from "../../components/button";
import { RootStackParams } from "../../app/navigation/types";
import { RouteName } from "../../app/route";

export type SignUpNavigationProps = NativeStackScreenProps<
  RootStackParams,
  RouteName.SignUp
>;

export interface SignUpParams {
  email: string;
}

const SignUpScreen = ({ route, navigation }: SignUpNavigationProps) => {
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [password, setPasswrod] = useState<string>();
  const onSignIn = () => {};
  useEffect(() => {
    setEmail(route.params.email);
  });

  const onAgreeTerms = () => {
    console.log(agreeTerms);
    setAgreeTerms(!agreeTerms);
  };

  const backToSignIn = () => {
    navigation.pop();
  };
  return (
    <SafeAreaView>
      <View style={{ height: "100%" }}>
        <View style={styles.containerTitle}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.titleScreen}>Sign&#32;</Text>
            <Text style={[styles.titleScreen, { color: "#38972E" }]}>Up</Text>
          </View>
          <Text style={{ color: "#828282", fontSize: 24 }}>
            Create a new account!
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            alignSelf: "center",
            alignContent: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <InputComponent
            style={styles.inputComponent}
            placeholder="Full name"
            text={email}
            onChangeText={setEmail}
          >
            <ProfileIcon width="24" height="24" />
          </InputComponent>
          <InputComponent
            style={styles.inputComponent}
            placeholder="Email"
            text={email}
            onChangeText={setEmail}
          >
            <EmailIcon width="24" height="24" />
          </InputComponent>
          <InputComponent
            style={styles.inputComponent}
            placeholder="Password"
            text={email}
            onChangeText={setEmail}
          >
            <LockIcon width="24" height="24" />
          </InputComponent>
          <InputComponent
            style={styles.inputComponent}
            placeholder="Confirm password"
            text={email}
            onChangeText={setEmail}
          >
            <LockIcon width="24" height="24" />
          </InputComponent>

          <TouchableOpacity onPress={onAgreeTerms}>
            <View
              style={{
                flexDirection: "row",
                marginTop: 16,
                width: "100%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderWidth: 1,
                  borderColor: agreeTerms ? "#38972E" : "#828282",
                  backgroundColor: agreeTerms ? "#38972E" : "transparent",
                }}
              />
              <Text style={{ fontSize: 16, color: "#828282", marginStart: 10 }}>
                Agree with trams and condition.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 2 }} />
          <ButtonComponent
            style={{ marginHorizontal: 25 }}
            title="Sign Up"
            onPress={onSignIn}
          />
          <View style={{ flex: 3 }} />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.bottomText}>Have an account?&#32;</Text>
            <TouchableOpacity onPress={backToSignIn}>
              <Text style={[styles.bottomText, { color: "#38972E" }]}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  containerTitle: {
    marginStart: 25,
    flex: 1,
    justifyContent: "center",
  },
  titleScreen: {
    fontWeight: "500",
    fontSize: 40,
  },
  inputComponent: {
    marginTop: 14,
  },
  bottomText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#828282",
  },
});
