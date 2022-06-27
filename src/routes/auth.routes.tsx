import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from 'screens/Login';
import RegisterRoutes from 'routes/register.routes';
import { ForgotPassword } from 'screens/ForgotPassword';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Login" component={Login} />
    <Screen name="Register" component={RegisterRoutes} />
    <Screen name="ForgotPassword" component={ForgotPassword} />
  </Navigator>
);

export default AuthRoutes;
