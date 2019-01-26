import React from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';
import styles from '../styles';

const mapstyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
})

class MapComponent extends React.Component<object, object> {
  state = {
    location: null,
    errorMessage: null,
  };
  interval: any = null;

  public componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Is map cannot use in virtual Devise T-T',
      });
    } else {
      this._getLocationAsync();
    }
  }

  public componentDidMount() {
    this.interval = setInterval(() => this._getLocationAsync(), 500);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  private _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      this.setState({
        errorMessage: 'We need location permission T-T',
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  public render() {
    let text: any = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = this.state.location;
      // console.log(text.coords.latitude, text.coords.longitude);
    }

    return (
      // <View style={mapstyles.container}>
      //   <Text style={mapstyles.paragraph}>{JSON.stringify(text)}</Text>
      // </View>

      text === 'Waiting..' ? null
      : <this.MapViewComponent getLatitude={text.coords.latitude} getLogitude={text.coords.longitude} />
      
    );
  }


  private MapViewComponent = ({getLatitude, getLogitude}: MapViewProps) => {
    console.log(getLatitude, getLogitude)
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: getLatitude,
          longitude: getLogitude,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.00421,
        }}
      />
    )
  }

}

interface MapViewProps {
  getLatitude: any;
  getLogitude: any;
}

export default MapComponent;