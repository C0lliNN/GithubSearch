import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = {
  background: '#232324',
  dark: '#201F1F',
  primary: '#8752CC',
  secondary: '#B2B2B2',
  fontWeightNormal: 400,
  fontWeightBold: 700,
  fontSizeSmall: '14px',
  fontsizeMedium: '16px',
  fontSizeBig: '18px',
};

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/GithubSearch">
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
