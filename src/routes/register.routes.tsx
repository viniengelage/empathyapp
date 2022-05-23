import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';

import { Step1 } from 'screens/Register/steps/step1';
import { Step2 } from 'screens/Register/steps/step2';
import { Step3 } from 'screens/Register/steps/step3';
import { Step4 } from 'screens/Register/steps/step4';
import { Step5 } from 'screens/Register/steps/step5';
import { Step6 } from 'screens/Register/steps/step6';
import { Step7 } from 'screens/Register/steps/step7';

const { Navigator, Screen } = createStackNavigator();

const RegisterRoutes = () => (
  <>
    <StatusBar style="dark" />
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Step1" component={Step1} />
      <Screen name="Step2" component={Step2} />
      <Screen name="Step3" component={Step3} />
      <Screen name="Step4" component={Step4} />
      <Screen name="Step5" component={Step5} />
      <Screen name="Step6" component={Step6} />
      <Screen name="Step7" component={Step7} />
    </Navigator>
  </>
);

export default RegisterRoutes;
