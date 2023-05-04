/* @refresh reload */
import { render } from 'solid-js/web';
import {  Router, Route, Routes } from "@solidjs/router"; 

import './index.css';
import App from './App';
import "@fontsource/acme"



const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

// render(() => <App />, root!);
render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
      </Routes>
    </Router>
  ),
  root!
);
