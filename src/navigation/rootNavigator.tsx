import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ReactElement} from 'react';
import IntroScreen from '../screens/intro/IntroScreen';
import SignInScreen from '../screens/signIn/SignInScreen';
import SignUpScreen from '../screens/signUp/SignUpScreen';

const Stack = createStackNavigator();

const RootNavigator = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'IntroScreen'}>
        <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
