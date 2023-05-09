import { Component, onCleanup, onMount } from "solid-js";
import { Box } from "@suid/material";
import Canvas from "./Canvas";

import styles from "../App.module.css";

const App: Component = () => {
  let canvas: any;
  onMount(() => {
    const ctx = canvas.getContext("2d");
    let frame = requestAnimationFrame(loop);

    function loop(t: any) {
      frame = requestAnimationFrame(loop);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      for (let p = 0; p < imageData.data.length; p += 4) {
        const i = p / 4;
        const x = i % canvas.width;
        const y = (i / canvas.height) >>> 0;

        const r = 64 + (128 * x) / canvas.width + 64 * Math.sin(t / 1000);
        const g = 64 + (128 * y) / canvas.height + 64 * Math.cos(t / 1000);
        const b = 128;

        imageData.data[p + 0] = r;
        imageData.data[p + 1] = g;
        imageData.data[p + 2] = b;
        imageData.data[p + 3] = 255;
      }

      ctx.putImageData(imageData, 0, 0);
    }

    onCleanup(() => cancelAnimationFrame(frame));
  });
  return (
    <Box class={styles.App} bgcolor="#FF164C" color="white">
      <Box
        width={450}
        height={550}
        bgcolor="rgba(255, 255, 255, 0.23)"
        borderRadius={"16px"}
        my={5}
        sx={{
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(1.6px)",
        }}
        border={"1px solid rgba(255, 255, 255, 1)"}
      >
        <Canvas ref={canvas} /> 
      </Box>
    </Box>
  );
};

export default App;
