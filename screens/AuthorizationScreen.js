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
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";

export default class AuthorizationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "" };
    this.onPressSignIn = this.onPressSignIn.bind();
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

  render() {
    const { login, password } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require("../asset/logo.png")} />

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
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
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
