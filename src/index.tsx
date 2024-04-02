import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import MainPage from './components/MainPage';
import {Grid} from "./components/Grid";
import YouTubeVideoContainer from "./components/YouTubeVideoContainer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
