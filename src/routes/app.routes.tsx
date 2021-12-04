import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from 'screens/Login';
import { useTheme } from 'styled-components';

import { Ionicons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes = () => {
  const { colors } = useTheme();

  const focusedIconStyle: StyleProp<TextStyle> = {
    backgroundColor: colors.button,
    padding: 8,
    borderRadius: 60,
  };

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.background,
        tabBarInactiveTintColor: colors.inactive_icon,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: colors.innerBackground,
          borderTopRightRadius: 32,
          borderTopLeftRadius: 32,
        },
      }}
    >
      <Screen
        name="Feed"
        component={Login}
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
        component={Login}
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
        name="Perfil"
        component={Login}
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
