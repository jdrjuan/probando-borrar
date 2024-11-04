import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as bootstrap from 'bootstrap';

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    <App />
);
