import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/global';
import { AuthProvider } from './contexts/authContextFile/authContext';
import { SignProvider } from './contexts/signModalContext/signModalContext';
import { LoadingProvider } from './contexts/loadingContext/loadingContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SignProvider>
      <AuthProvider>
        <LoadingProvider>
          <GlobalStyle />
          <App />
        </LoadingProvider>
      </AuthProvider>
    </SignProvider>
  </React.StrictMode>
);
