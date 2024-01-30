import { createContext, useState } from 'react';
import { IAuthContext, IAuthProvider, ILoginData } from './type';
import { IUser } from '../../types/type';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [ user, setUser ] = useState<IUser>({} as IUser);

  const handleLogin = async (loginData: ILoginData) => {
    setUser(loginData)
    console.log(loginData);
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider }