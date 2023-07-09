import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import AppStack from './navigation/AppStack';

const MainUI = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        return RNBootSplash.hide({fade: true, duration: 500});
      }}>
      <AppStack />
    </NavigationContainer>
  );
};

export default MainUI;
