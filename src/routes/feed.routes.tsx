import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Feed } from 'screens/Feed';
import { Post } from 'screens/Post';

const { Navigator, Screen } = createStackNavigator();

const FeedRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Feed" component={Feed} />
    <Screen name="Post" component={Post} />
  </Navigator>
);

export default FeedRoutes;
