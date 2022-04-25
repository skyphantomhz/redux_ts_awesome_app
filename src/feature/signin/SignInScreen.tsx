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
import { useTranslation } from "react-i18next";

export type SignInNavigationProps = NativeStackScreenProps<
  RootStackParams,
  RouteName.SignIn
>;

const SignInScreen = ({ navigation }: SignInNavigationProps) => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState<string>();
  const [password, setPasswrod] = useState<string>();
  const onSignIn = () => {
    navigation.navigate(RouteName.Onboarding);
  };
  const onSignUp = () => {
    navigation.navigate(RouteName.SignUp, { email: email ?? "" });
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
            placeholder={t("email")}
            text={email}
            onChangeText={setEmail}
          >
            <EmailIcon width="24" height="24" />
          </InputComponent>
          <InputComponent
            style={{ marginTop: 34 }}
            placeholder={t("password")}
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
            title={t("sign_in")}
            onPress={onSignIn}
          />
          <View style={{ flex: 1 }} />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.bottomText}>{t("dont_have_account")}&#32;</Text>
            <TouchableOpacity onPress={onSignUp}>
              <Text style={[styles.bottomText, { color: "#38972E" }]}>
                {t("sign_up")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.changeLanguageContent}>
          <Text
            style={[
              styles.languageItem,
              { fontWeight: i18n.language == "en" ? "800" : "400" },
            ]}
            onPress={() => {
              i18n.changeLanguage("en");
            }}
          >
            English
          </Text>
          <Text
            style={[
              styles.languageItem,
              { fontWeight: i18n.language == "vi" ? "800" : "400" },
            ]}
            onPress={() => {
              i18n.changeLanguage("vi");
            }}
          >
            Tiếng Việt
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  changeLanguageContent: {
    flexDirection: "row",
    position: "absolute",
    top: 20,
    right: 0,
  },
  languageItem: {
    padding: 5,
  },
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
