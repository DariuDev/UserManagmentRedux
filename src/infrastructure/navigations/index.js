import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './AppNavigator';
import {theme} from '../theme/index';

export const Navigation = () => {
  return (
    <NavigationContainer theme={theme}>
      <AppNavigator />
    </NavigationContainer>
  );
};