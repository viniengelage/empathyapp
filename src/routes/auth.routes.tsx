import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from 'screens/Login';
import RegisterRoutes from 'routes/register.routes';
import {ChangePassword} from 'screens/Profile/options/ChangePassword';
import { ChangePreferences } from 'screens/Profile/options/ChangePreferences';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Login" component={Login} />
    <Screen name="Register" component={RegisterRoutes} />
    <Screen name="ChangePassword" component={ChangePassword} />
    <Screen name="ChangePreferences" component={ChangePreferences} />
  </Navigator>
);

export default AuthRoutes;
