import React from 'react';
import { Text, View, TouchableHighlight, ActivityIndicator } from 'react-native';
import styles from '../styles';

interface MultiTapProps {
  numberOfTouches: number;
  onPress: any;
}

class MultiTap extends React.Component<MultiTapProps, object> {
  static defaultProps = {
    onPress: () => null,
    numberOfTouches: 2,
  };


  onMoveShouldSetResponder = (event: any) => {
    console.log(event.nativeEvent.pageX);
    return true;
  }

  onStartShouldSetResponder = (event: any) => {
    if (event.nativeEvent.touches.length === this.props.numberOfTouches) {
      return true;
    }
    return false;
  };

  onResponderRelease = (event: any) => {
    this.props.onPress();
    console.log(event.nativeEvent.locationX)
  };

  render() {
    return (
      <View
        onMoveShouldSetResponder={this.onMoveShouldSetResponder}
        onStartShouldSetResponder={this.onStartShouldSetResponder}
        onResponderRelease={this.onResponderRelease}
      >
        {this.props.children}
      </View>
    );
  }
}

class TouchView extends React.Component<object, object> {
  public render() {
    return(
      <MultiTap onPress={() => alert('double tap!')} numberOfTouches={2}>
        <TouchableHighlight onPress={() => alert('box tapped!')}>
          <View style={styles.box} />
        </TouchableHighlight>
      </MultiTap>
    )
  }
}

export default TouchView;