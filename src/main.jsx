import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import store from './store/store.jsx';
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {StyledEngineProvider} from "@mui/material/styles";

export let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <App/>
          </PersistGate>
      </Provider>
    </StyledEngineProvider>
  // </React.StrictMode>
)
