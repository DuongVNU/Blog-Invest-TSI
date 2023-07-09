import React, {useMemo} from 'react';
import {useAuth} from '../../context/AuthContext/AuthContext';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const AppStack: React.FC = () => {
  const {isAuthenticated} = useAuth();

  const authenticated = useMemo(() => {
    return isAuthenticated();
  }, [isAuthenticated]);

  const app = useMemo(() => {
    return authenticated ? <MainStack /> : <AuthStack />;
  }, [authenticated]);

  return app;
};

export default AppStack;
