import { createContext, useState } from 'react';
import { AuthContextType, AuthProviderProps } from './type';


const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [ login, setLogin ] = useState<boolean>(false);

  const handleLogin = () => {
    setLogin(true)
  };

  return (
    <AuthContext.Provider value={{ login, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};