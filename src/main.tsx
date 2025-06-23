import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './router/routes';

const App = () => {
  return (
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
