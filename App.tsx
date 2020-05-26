import 'react-native-gesture-handler';
import React, {ReactElement} from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './src/navigation/rootNavigator';

const App = (): ReactElement => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <RootNavigator />
    </>
  );
};

export default App;
