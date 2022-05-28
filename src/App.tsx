import 'react-native-gesture-handler';

import React from 'react';

import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { setLocale } from 'yup';
import { StatusBar } from 'expo-status-bar';
import defaultTheme from 'styles/theme';

import { Routes } from 'routes';
import { AuthProvider } from './hooks/auth';

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
