import React, {useRef} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

const MainUI = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        return RNBootSplash.hide({fade: true, duration: 500});
      }}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{title: 'Overview'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainUI;
