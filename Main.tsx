import React from 'react';
import { Text, View, Button } from 'react-native';
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
            <View>
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