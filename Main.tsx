import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';
import { AppContext, AppContextInterface } from './Store';

interface MainProps {
  context: any
}

interface MainState {
  title: string;
}

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      title: 'Title from Main state'
    }
  }

  // static contextType = AppContext; // this code only can use (react 16.6.0 >=)
  // console.log(this.context);
  
  public componentDidMount () {
    this.props.context(); 
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textH1}>{this.state.title}</Text>
        <AppContext.Consumer>
          {(store: AppContextInterface) => 
            <View style={styles.inContainer}>
              <Text style={styles.textH2}>{store.data}</Text>
              <Text style={styles.textH2}>{store.age}</Text>
            </View>
          }
        </AppContext.Consumer>

        <MultiTap onPress={() => alert('double tap!')} numberOfTouches={2}>
          {/* <TouchableHighlight onPress={() => alert('box tapped!')}> */}
            <View style={styles.box} />
          {/* </TouchableHighlight> */}
        </MultiTap>
      </View>
    )
  }
}

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

export default Main;