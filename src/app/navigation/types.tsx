import { SignUpParams } from "../../feature/signup/SignUpScreen";
import { Rocket } from "../../model/rocket";

export type RootStackParams = {
  SignIn: undefined;
  SignUp: SignUpParams;
  Onboarding: undefined;
  Blank: undefined;
  HomeMainPage: undefined;
  HomePage: undefined;
  RocketDetail: Rocket;
  Profile: undefined;
};
