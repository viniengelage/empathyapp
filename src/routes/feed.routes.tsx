import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Feed } from 'screens/Feed';

const { Navigator, Screen } = createStackNavigator();

const FeedRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Feed" component={Feed} />
  </Navigator>
);

export default FeedRoutes;
