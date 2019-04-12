import React, {Component} from 'react';
import MapView from 'react-native-maps'
export default class App extends Component<Props> {
    state = {
      latitude: 0,
            longitude: 0
    }
    componentWillMount() {
      console.log('mounted ')
      navigator.geolocation.getCurrentPosition(
        //Will give you the current location
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          console.log(this.state.latitude)
          console.log(this.state.longitude)
        },
        (error) => alert(error.message),
        { 
           enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 
        }
     );
    }  
  render() {


      return (
  
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
      );
   
  }
}
