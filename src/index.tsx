import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BaseProvider } from './providers/base';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BaseProvider>
      <App />
    </BaseProvider>
  </React.StrictMode>
);
