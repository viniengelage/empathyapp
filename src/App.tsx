import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { setLocale } from 'yup';
import { StatusBar } from 'expo-status-bar';

import defaultTheme from 'styles/theme';

// import AppRoutes from 'routes/app.routes';
import AuthRoutes from 'routes/auth.routes';

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

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

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
