import { createContext, useState } from 'react';
import { ISignModalContext, ISignModalProvider } from './type';

const SignContext = createContext<ISignModalContext>({} as ISignModalContext);

const SignProvider = ({ children }: ISignModalProvider) => {
  const [ activeLogin, setActiveLogin ] = useState(false);
  const [ activeSign, setActiveSign ] = useState(false);

  const toogleLoginModal = () => !activeLogin ? setActiveLogin(true) : setActiveLogin(false);
  const toogleSignModal = () => !activeSign ? setActiveSign(true) : setActiveSign(false);

  return (
    <SignContext.Provider value={{ toogleLoginModal, toogleSignModal, activeLogin, activeSign }}>
      {children}
    </SignContext.Provider>
  );
};

export {SignProvider, SignContext};