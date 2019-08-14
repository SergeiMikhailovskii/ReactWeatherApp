import React from "react";
import {
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import ImagePicker from "react-native-image-picker";
import { Grid, LineChart, XAxis, YAxis } from "react-native-svg-charts";

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

    const data = [49, 55, 75, 65, 46, 59, 42, 57, 47, 52];
    const years = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    const axesSvg = { fontSize: 10, fill: "grey" };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 30;

    return (
      <SafeAreaView>
        <TouchableOpacity style={{ margin: 16 }} onPress={this.onPress}>
          <View>
            <Text>Choose image</Text>
          </View>
        </TouchableOpacity>

        {photo && <Image source={photo} style={{ width: 300, height: 300 }} />}

        <View style={{ height: 250, padding: 20, flexDirection: "row" }}>
          <YAxis
            data={data}
            style={{ marginBottom: xAxisHeight }}
            contentInset={verticalContentInset}
            svg={axesSvg}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <LineChart
              style={{ flex: 1 }}
              data={data}
              contentInset={verticalContentInset}
              svg={{ stroke: "rgb(134, 65, 244)" }}
            >
              <Grid />
            </LineChart>
            <XAxis
              style={{ marginHorizontal: -10, height: xAxisHeight }}
              data={years}
              formatLabel={(value, index) => years[index]}
              contentInset={{ left: 10, right: 10 }}
              svg={axesSvg}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
