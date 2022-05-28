import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { useAuth } from '../hooks/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export function Routes() {
  const { isLoading, user } = useAuth();

  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          Poppins_300Light,
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_600SemiBold,
          Poppins_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  // Todo -> If user still loading, display a custom loading page

  return (
    <View style={{ flex: 1, width: '100%' }} onLayout={onLayoutRootView}>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </View>
  );
}
