import React, {useContext} from 'react';

export interface AuthContextType {
  isAuthenticated: () => boolean;
}

const AuthContext = React.createContext<AuthContextType>({
  isAuthenticated: () => false,
});

const useAuth = () => React.useContext(AuthContext);

export {useAuth, AuthContext};
