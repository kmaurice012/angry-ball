import { Component, createSignal } from "solid-js";
import { Box } from "@suid/material";
import styles from "../App.module.css";

//referrences
let ref: any = null;
let rect: any = null;
let painting = false;
let ctx: any;

//handle event mouse
const [pos, setPos] = createSignal({ x: 0, y: 0 });
const [initipos, setInitialPos] = createSignal({ x: 0, y: 0 });
const [endpos, endPos] = createSignal({ x: 0, y: 0 });

const handleMouseMove = (event: any) => {
  ref = document.getElementById("canvas");
  rect = ref != null ? ref.getBoundingClientRect() : null;
  ctx = ref.getContext("2d");

  console.log(painting, "Painting");

  // if (!painting) return;

  // ctx.lineWidth = 10;
  // ctx.lineCap = "round";
  // ctx.lineTo(event.clientX, event.clientY);
  // ctx.stroke();
  // ctx.beginPath();
  // ctx.moveTo(event.clientX, event.clientY);
  ctx.fillRect(190, 535, 70, 10);

  const ball = {
    x: 25,
    y: 25,
  };
  const velocity = 3;
  const startingAngle = 70;
  const rad = 20;
  let moveX = Math.cos((Math.PI / 180) * startingAngle) * velocity;
  let moveY = Math.sin((Math.PI / 180) * startingAngle) * velocity;

  const drawMe = () => {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(ball.x, ball.y, rad, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  };
  //set current position
  setPos({
    x: event.clientX,
    y: event.clientY,
  });
};

const startPosition = (event: any) => {
  painting = true;
  // handleMouseMove(event);
  setInitialPos({
    x: event.clientX,
    y: event.clientY,
  });
};
const endPosition = (event: any) => {
  painting = false;
  // ctx.beginPath();
  endPos({
    x: event.clientX,
    y: event.clientY,
  });
};

const App: Component = () => {
  const Canvas = (props: any) => {
    return (
      <canvas
        id={props.id}
        width={props.width}
        height={props.height}
        style={{ "border-radius": "16px" }}
        onmousemove={handleMouseMove}
        onmousedown={startPosition}
        onmouseup={endPosition}
      />
    );
  };

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
        <Canvas id="canvas" width={"450"} height={"550"} />
        x: {pos().x}
        y: {pos().y}
      </Box>
    </Box>
  );
};

export default App;
