import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from 'screens/Login';
import RegisterRoutes from 'routes/register.routes';
import ChallengesAccomplished from 'screens/ChallengesAccomplished/index';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Login" component={Login} />
    <Screen name="Register" component={RegisterRoutes} />
    <Screen name="ChallengesAccomplished" component={ChallengesAccomplished} />
  </Navigator>
);

export default AuthRoutes;
