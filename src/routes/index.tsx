import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import { useAuth } from '../hooks/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export function Routes() {
  const { isLoading, user } = useAuth();
  // onLayout={onLayoutRootView}
  // Todo -> If user still loading, display a custom loading page

  return (
    <View style={{ flex: 1, width: '100%' }}>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </View>
  );
}
