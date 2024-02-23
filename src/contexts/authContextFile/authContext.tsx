import { createContext, useState } from 'react';
import { IAuthContext, ILoginData } from './type';
import { ChildrenProvider, IUser } from '../../types/type';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: ChildrenProvider) => {
  const [ user, setUser ] = useState<IUser>({} as IUser);

  const handleLogin = (loginData: ILoginData) => {
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