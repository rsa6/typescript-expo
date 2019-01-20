import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';
import { AppContextInterface, AppContext } from './Store';
import Main from './Main';

class App extends React.Component<object, AppContextInterface> {
  constructor(props: object) {
    super(props);
    this.state = {
      data: 'Context data',
      age: 18
    }
  }

  public render() {
    return (
      <AppContext.Provider value={this.state}>
        <Main />
      </AppContext.Provider>
    );
  }

}

export default App;