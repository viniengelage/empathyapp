import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { Ionicons } from '@expo/vector-icons';
import { Home } from 'screens/Home';
import { Post } from 'screens/Post';
import { Profile } from 'screens/Profile';
import FeedRoutes from './feed.routes';
import ProfileRoutes from './profile.routes';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes = () => {
  const { colors } = useTheme();

  const focusedIconStyle: StyleProp<TextStyle> = {
    backgroundColor: colors.background,
    padding: 8,
    borderRadius: 30,
  };

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.background,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: colors.primary,
          borderTopRightRadius: 6,
          borderTopLeftRadius: 6,
        },
      }}
    >
      <Screen
        name="FeedRoutes"
        component={FeedRoutes}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name="file-tray-full"
              size={size}
              color={color}
              style={focused && focusedIconStyle}
            />
          ),
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name="home"
              size={size}
              color={color}
              style={focused && focusedIconStyle}
            />
          ),
        }}
      />
      <Screen
        name="ProfileRoutes"
        component={ProfileRoutes}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name="person"
              size={size}
              color={color}
              style={focused && focusedIconStyle}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default AppRoutes;
