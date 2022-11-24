import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-day-picker/dist/style.css';
import AuthProvider from './Context/AuthContext/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient()


ReactDOM.render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>

      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
