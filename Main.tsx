import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';
import { AppContext, AppContextInterface } from './Store';

interface MainState {
  title: string;
}

class Main extends React.Component<object, MainState> {
  constructor(props: object) {
    super(props);
    this.state = {
      title: 'Title from Main state'
    }
  }

  static contextType = AppContext;

  public componentDidMount () {
    setTimeout(() => {
      console.log(this.context);

    }, 2000)
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textH1}>{this.state.title}</Text>
        <AppContext.Consumer>
          {(store: AppContextInterface) => 
            <View>
              <Text>{store.data}</Text>
              <Text>{store.age}</Text>
            </View>
          }
        </AppContext.Consumer>
      </View>
    )
  }

}

export default Main;