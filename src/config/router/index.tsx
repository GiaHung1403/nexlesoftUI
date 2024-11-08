import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useRef} from 'react';
import 'react-native-gesture-handler';

import * as React from 'react';
import LoginScreen from '@screens/login-screen';
import DetailScreen from '@screens/detail-screen';

//test scan

const Stack = createStackNavigator();

function RootStack() {
  const navigationRef = useRef<any>();
  const routeNameRef = useRef();

  return (
    <NavigationContainer
      theme={DefaultTheme}
      //   fallback={<LoadingFullScreen />}
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
        if (navigationRef.current.getCurrentRoute().name === 'LoginScreen') {
          return;
        }
      }}>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          animationEnabled: true,
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="LoginScreen" component={LoginScreen} />
    //     <Stack.Screen name="DetailScreen" component={DetailScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default RootStack;
