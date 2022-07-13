import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 設定移動端的適配
// 除以多少視口寬度就是多少 rem, 現在設定的視口總寬為 750rem
document.documentElement.style.fontSize = 100 / 750 + 'vw';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
