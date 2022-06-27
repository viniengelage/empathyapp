import 'react-native-gesture-handler';

import React, { useCallback, useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'expo-status-bar';
import { setLocale } from 'yup';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from 'hooks/auth';
import { Routes } from 'routes';

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

import defaultTheme from 'global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import { View } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const App = () => {
  setLocale({
    mixed: {
      required: 'Preencha esse campo para continuar',
    },
    string: {
      min: 'Digite ao menos ${min} caracteres',
    },
  });

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
  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar style="dark" />
        <NavigationContainer>
          <AuthProvider>
            <Routes />
            <Toast position="bottom" visibilityTime={3000} autoHide />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </View>
  );
};

export default App;
