import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './app/store'
import { persistor } from './app/configureStore'
import { Provider } from 'react-redux'
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import LoadingPage from "./components/LoadingPage";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>    
        <App />      
    </Provider>
  </React.StrictMode>
);

