import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/global';
import { AuthProvider } from './contexts/authContextFile/authContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <App />
    </AuthProvider>
  </React.StrictMode>
);
