import React from 'react';

import {NativeBaseProvider} from 'native-base';

import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/router';
import {Provider} from 'react-redux';
import store from './store';
EStyleSheet.build();

export default function App(props: any) {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Navigator />
        {/* <LoginScreen></LoginScreen> */}
      </NativeBaseProvider>
    </Provider>
  );
}
