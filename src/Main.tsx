import React from 'react';
import { Text, View, TouchableHighlight, ActivityIndicator } from 'react-native';
import styles from '../styles';
import { AppContext, AppContextInterface } from '../Store';
import TouchView from './TouchView';
import MapComponent from './MapComponent';

interface MainProps {
  context: any
}

interface MainState {
  loadingTime: number;
}

class Main extends React.Component<MainProps, MainState> {
  // static contextType = AppContext; // this code only can use (react 16.6.0 >=)
  // console.log(this.context);
  public state = {
    loadingTime: 10,
  }

  public componentDidMount () {
    this.props.context();
    setInterval(() => {
      this.setState({loadingTime: this.state.loadingTime -1});
    }, 1000)
  }

  private loading = () => {
    return (
      <View>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.textH1}>{this.state.loadingTime}</Text>
      </View>
    )
  }

  private loadingComplite = () => {
    return (
      <View>
        <Text style={styles.textH1}>로딩 끝났다</Text>
      </View>
    )
  }

  public render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.textH1}>{this.state.loadingTime} 1</Text>
      // </View>
      // <MainView />
      <MapComponent />
    )
  }
}


interface MainViewState {
  title: string;
  loadingTime: number;
}

class MainView extends React.Component<object, MainViewState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      title: 'this is loading...', // 'Title from Main state'
      loadingTime: 4,
    }
  }

  public render() {
    return(
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
      </View>
    )
  }
}

export default Main;
