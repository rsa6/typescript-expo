
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