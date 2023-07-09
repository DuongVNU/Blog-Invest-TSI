// In App.js in a new project
import React from 'react';
import MainUI from './ui/MainUI';
import AuthProvider from './context/AuthContext/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <MainUI />
    </AuthProvider>
  );
};

export default App;
