import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import ThemeProvider from './providers/ThemeProvider' 
import { Provider } from "react-redux";
import { store } from "./store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
          </BrowserRouter>
      </ThemeProvider>
    </Provider>
  
);