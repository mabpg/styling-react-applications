import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    tan: "#fceed1",
    purple: "#7d3cff",
    yellow: "#f2d53c",
    red: "#c80e13"
  },
  fonts: {
    body: "Arial, Helvetica, sans-serif"
  }
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
