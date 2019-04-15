import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import MapView, { Callout } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
Geocoder.init('AIzaSyBqua7JcBoxRxZoKMZY5DqnnDUASr97IYM');

export default class App extends Component<Props> {
    state = {
      searchTerm: '',
      latitude: 0,
      longitude: 0,
      styles: {
        calloutView: {
          flexDirection: `row`,
          backgroundColor: `rgba(255, 255, 255, 0.9)`,
          borderRadius: 10,
          width: `40%`,
          marginLeft: `30%`,
          marginRight: `30%`,
          marginTop: 40
        },
        calloutSearch: {
          borderColor: `transparent`,
          marginleft: 10,
          width: `90%`,
          marginRight: 10,
          height: 40,
          borderWidth: 0.0  
        }
      }
    }
    
    componentWillMount() {
      console.log('will mount ')
      navigator.geolocation.getCurrentPosition(
        //Will give you the current location
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          console.log('lat: '+this.state.latitude)
          console.log('long: '+this.state.longitude)
        },
        (error) => alert(error.message),
        { 
           enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 
        }
     );
    }  
    findNewLocation = newLocation => {

      Geocoder.from("Colosseum")
        .then(json => {
            var location = json.results[0].geometry.location;
            console.log(location);
        })
        .catch(error => console.warn(error));
    }
  render() {


      return (
        <View
        style={{ 
          height: 1000
        }}>
        <MapView
          style={{flex: 1}}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        />
        <Callout>
    <View style={this.state.styles.calloutView} >
      <TextInput style={this.state.styles.calloutSearch}
        onSubmitEditing={() => this.findNewLocation(this.state.searchTerm)}
        onChangeText={(searchTerm) => this.setState({searchTerm})}
        value={this.state.searchTerm}
        placeholder={"Search"}
      />
    </View>
  </Callout>
      </View> 
      );
   
  }
}
