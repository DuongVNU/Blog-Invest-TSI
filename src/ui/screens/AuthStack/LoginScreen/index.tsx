import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AuthStackScreenProps} from '../../../navigation/AuthStack';
import style from './style';

type Props = AuthStackScreenProps<'Login'>;

const LoginScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={style.screenContainer}>
      <Text style={style.title}>Login Screen</Text>
      <TouchableOpacity style={style.buttonStyle} onPress={() => 1}>
        <Text style={style.buttonTextStyle}>Login By Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.buttonStyle} onPress={() => 1}>
        <Text style={style.buttonTextStyle}>Login By FaceBook</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
