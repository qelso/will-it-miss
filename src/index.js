import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App';

// render(<App />, document.getElementById('app'));
const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);

if (module.hot) {
  module.hot.accept(function() {
    window.location.reload();
  });
}
