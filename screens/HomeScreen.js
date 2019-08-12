import React from "react";
import { View, Text, SafeAreaView } from "react-native";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>New screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}
