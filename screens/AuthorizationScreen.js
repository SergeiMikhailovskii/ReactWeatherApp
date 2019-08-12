import React from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet
} from "react-native";

export default class AuthorizationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "" };
  }

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
