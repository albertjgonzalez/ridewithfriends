import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class App extends Component<Props> {
  render() {
    return (
      <View style={{backgroundColor:`white`,height:`100%`,paddingTop:`20%`}}>
          <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
      </View>
    );
  }
}

