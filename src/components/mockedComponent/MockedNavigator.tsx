import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

interface Props {
  component: React.ComponentType<any>;
  params?: any;
}

const Stack = createStackNavigator();
const MockedNavigator = ({component, params = {}}: Props): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;
