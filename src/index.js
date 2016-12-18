import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css';

import TranslationProvider from './services/TranslationProvider';
import ImageProvider from './services/ImageProvider';


ReactDOM.render(
  <App translationProvider={new TranslationProvider()} imageProvider={new ImageProvider()} />,
  document.getElementById('root')
);
