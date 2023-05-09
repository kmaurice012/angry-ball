import type { Component } from "solid-js";
import { Router, Route, Routes } from "@solidjs/router";

import styles from "./App.module.css";
import Menu from "../src/components/Menu";
import Pause from "../src/components/Pause";
import Options from "../src/components/Options";
import Game from "../src/components/Game";
import { ThemeProvider } from "@suid/material";
import { theme } from "../theme";

const App: Component = () => { 
  return (
    <ThemeProvider theme={theme}>
      <div class={styles.App}>
        <Router>
          <Routes>
          <  Route path="/" component={Menu} />
            <Route path="/pause" component={Pause} />
            <Route path="/options" component={Options} />
            <Route path="/game" component={Game} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
