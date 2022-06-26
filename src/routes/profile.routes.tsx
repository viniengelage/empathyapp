import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChallengesAccomplished } from 'screens/ChallengesAccomplished/index';

import { Profile } from 'screens/Profile';

const { Navigator, Screen } = createStackNavigator();
const ProfileRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Profile" component={Profile} />
    <Screen name="ChallengesAccomplished" component={ChallengesAccomplished} />
  </Navigator>
);

export default ProfileRoutes;
