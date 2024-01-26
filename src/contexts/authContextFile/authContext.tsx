import { createContext, useState } from 'react';
import { IAuthContext, IAuthProvider, ILoginData } from './type';
import { IUser } from '../../types/type';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [ user, setUser ] = useState<IUser>({} as IUser);

  const handleLogin = async (loginData: ILoginData) => {
    
  };

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};