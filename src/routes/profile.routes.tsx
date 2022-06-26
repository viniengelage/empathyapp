import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Profile } from 'screens/Profile';

const { Navigator, Screen } = createStackNavigator();

const ProfileRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Profile" component={Profile} />
  </Navigator>
);

export default ProfileRoutes;
