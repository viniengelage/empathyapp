import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from 'screens/Login';
import RegisterRoutes from 'routes/register.routes';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Login" component={Login} />
    <Screen name="Register" component={RegisterRoutes} />
  </Navigator>
);

export default AuthRoutes;
