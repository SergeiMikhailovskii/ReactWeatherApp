import React from "react";
import {
  Alert,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet
} from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from "react-native-google-signin";

export default class AuthorizationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "" };
    this.onPressSignIn = this.onPressSignIn.bind();

    GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        "300902554045-16l0lokjsptan35td77undr1o8peik63.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: "", // specifies a hosted domain restriction
      loginHint: "", // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
      accountName: "", // [Android] specifies an account name on the device that should be used
      iosClientId:
        "300902554045-aujqhtio4h10jadt15ddqjdj10sh1tu5.apps.googleusercontent.com" // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }

  onPressSignIn = () => {
    const { login, password } = this.state;
    if (login !== "" && password !== "") {
      console.log(`${login} ${password}`);
      const { navigation } = this.props;
      navigation.navigate("HomeScreen");
    } else {
      Alert.alert("Fill the fields");
    }
  };

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
      console.log(userInfo);
      const { navigation } = this.props;
      navigation.navigate("HomeScreen");
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("cancelled");
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("in progress");
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("not available");
        // play services not available or outdated
      } else {
        console.log(error);
        // some other error happened
      }
    }
  };

  render() {
    const { login, password } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../asset/logo.png")}
            resizeMode={"center"}
          />

          <View style={styles.loginAndPassword}>
            <TextInput
              placeholder="Enter login"
              onChangeText={login => this.setState({ login })}
              value={login}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.loginAndPassword}>
            <TextInput
              placeholder="Enter password"
              onChangeText={password => this.setState({ password })}
              value={password}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <TouchableOpacity
            style={{ paddingBottom: 16 }}
            onPress={this.onPressSignIn}
          >
            <View>
              <Text>Sign In</Text>
            </View>
          </TouchableOpacity>

          <GoogleSigninButton
            style={{ width: 230, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.signIn}
            disabled={this.state.isSignInInProgress}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 32
  },
  loginAndPassword: {
    marginBottom: 16,
    borderBottomColor: "#000",
    borderBottomWidth: 1
  }
});
