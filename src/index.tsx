import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'

import App from './app/App'

import './index.scss'

const container = document.getElementById('root') as Element;
const root = createRoot(container);

root.render(<App />);
