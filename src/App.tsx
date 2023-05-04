import type { Component } from 'solid-js';

import styles from './App.module.css';
import Menu  from '../src/components/Menu'
import { ThemeProvider } from '@suid/material';
import { theme } from '../theme';

const App: Component = () => {
  return (
    <ThemeProvider theme={theme}>
    <div class={styles.App}>
      <Menu/>
    </div>
    </ThemeProvider>
  );
};

export default App;
