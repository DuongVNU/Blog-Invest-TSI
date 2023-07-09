import React, {FC} from 'react';
import {ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {MainRouteConfig} from '../../config/RouteConfig';
import HomeScreen from '../screens/MainStack/HomeScreen';
import DetailScreen from '../screens/MainStack/DetailScreen';

export interface RootStackParamList extends ParamListBase {
  Home: undefined;
  Detail: undefined;
}

export type MainStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={MainRouteConfig.Home}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{title: 'Overview'}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
