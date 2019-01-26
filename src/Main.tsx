import React from 'react';
import { Text, View, TouchableHighlight, ActivityIndicator } from 'react-native';
import styles from '../styles';
import { AppContext, AppContextInterface } from '../Store';
import TouchView from './TouchView';

interface MainProps {
  context: any
}

interface MainState {
  title: string;
  loadingTime: number;
}

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      title: 'this is loading...', // 'Title from Main state'
      loadingTime: 4,
    }
  }

  // static contextType = AppContext; // this code only can use (react 16.6.0 >=)
  // console.log(this.context);
  
  public componentDidMount () {
    this.props.context();
    setInterval(() => {
      this.setState({ loadingTime: this.state.loadingTime -1});
    }, 1000)
  }

  private loading = () => {
    return (
      <View>
        <Text style={styles.textH1}>{this.state.title}</Text>
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
