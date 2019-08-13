import React from "react";
import {
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import ImagePicker from "react-native-image-picker";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null
    };
  }

  onPress = () => {
    const options = {
      noData: true
    };

    ImagePicker.launchImageLibrary(options, response => {
      console.log("response", response);
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };

  render() {
    const { photo } = this.state;
    return (
      <SafeAreaView>
        <TouchableOpacity style={{ margin: 16 }} onPress={this.onPress}>
          <View>
            <Text>Choose image</Text>
          </View>
        </TouchableOpacity>

        {photo && <Image source={photo} style={{ width: 300, height: 300 }} />}
      </SafeAreaView>
    );
  }
}
