import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
    </Provider>
);


// Usamos o ReactDOM.render em vez do ReactDOM.createRoot
// createRoot(document.getElementById('root')).render(<App />);
//   <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
