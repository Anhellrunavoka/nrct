import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router';
import router from './routers/routers';
import ThemeProvider from './contexts/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
