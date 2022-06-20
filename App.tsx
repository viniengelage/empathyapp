import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { setLocale } from 'yup';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from 'hooks/auth';
import { Routes } from 'routes';

import defaultTheme from 'global/styles/theme';

import { NavigationContainer } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';

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

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
