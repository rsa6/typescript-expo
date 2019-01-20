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
      age: 18,
      testFunction: this._testFunction
    }
  }

  private _testFunction = (): void => console.log('this is _testFunction');

  public render() {
    return (
      <AppContext.Provider value={this.state}>
        <Main context={this.state.testFunction} />
      </AppContext.Provider>
    );
  }

}

export default App;