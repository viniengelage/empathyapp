import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from 'screens/Login';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Login" component={Login} />
  </Navigator>
);

export default AuthRoutes;
