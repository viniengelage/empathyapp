import React from 'react';

import { View } from 'react-native';
import AppLoading from 'expo-app-loading';

import { useAuth } from '../hooks/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export function Routes() {
  const { isLoading, user } = useAuth();

  if (isLoading) return <AppLoading />;

  return (
    <View style={{ flex: 1, width: '100%' }}>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </View>
  );
}
