import React, {useCallback, useMemo, useState} from 'react';
import {AuthContext} from './AuthContext';

interface Props {
  children: React.ReactNode;
}

const AuthProvider: React.FC<Props> = ({children}) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const isAuthenticated = useCallback(() => {
    return authenticated;
  }, [authenticated]);

  const authContext = useMemo(
    () => ({
      isAuthenticated: isAuthenticated,
    }),
    [isAuthenticated],
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
