import React from 'react';
import { Image, Text, View } from 'react-native';
import { Asset, AppLoading } from 'expo';

export default class App extends React.Component<object, object> {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Image source={require('./assets/images/expo-icon.png')} />
        <Image source={require('./assets/images/slack-icon.png')} />
      </View>
    );
  }

  async _cacheResourcesAsync() {
    const images = [
      require('./assets/images/expo-icon.png'),
      require('./assets/images/slack-icon.png'),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages)

  }1
}