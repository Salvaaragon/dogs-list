import { MuiThemeProvider } from '@material-ui/core';
import i18n from '@Services/i18n/config';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import App from './containers/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <I18nextProvider i18n={i18n}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </MuiThemeProvider>
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
