import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux';
import { persistor, store } from './store/store';

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
)
