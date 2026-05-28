
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// プリレンダ済みページ（data-ssg 付き）は hydrate、
// SPAフォールバックの空シェル（data-ssg なし）は createRoot で素のCSR描画。
// フォールバック時に hydrate すると「ホームDOM ↔ 実ルート描画」の不一致(#418)になるため出し分ける。
if (rootElement.hasAttribute('data-ssg')) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
