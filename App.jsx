import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import { LockButtonWithStateText } from './src/components/LockButtonWithStateText';

const App = () => {

  const backgroundStyle = {
    backgroundColor: '#10401d',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text style={{fontSize: 30}} >Door Lock Handler</Text>
      <LockButtonWithStateText />
    </SafeAreaView>
  );
};

export default App;
