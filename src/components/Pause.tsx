import type { Component } from "solid-js";
import { Button, ListItem, Stack } from "@suid/material";
import { List, Box, Typography } from "@suid/material";

import styles from "../App.module.css";
import { ArrowLeftSharp, ArrowRightSharp } from "@suid/icons-material";

const App: Component = () => {
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
        <Stack
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
        >
          <Typography variant="h3" marginTop={4} gutterBottom>
            Game Menu
          </Typography>

          <nav aria-label="main mailbox folders">
            <List
              sx={{
                width: 250,
                "& .MuiButton-root": {
                  transition: "all .5s",
                  width: 250,
                  border: "1px solid rgba(255, 255, 255, 0)",
                  borderRadius: "5px",
                  height: 50,
                  "&:hover": {
                    backgroundColor: "rgba( 255, 255, 255, 0.45 )",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(1.6px)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255, 255, 255, 1)",
                    color: "#b71d1d",

                    "& .MuiButton-startIcon": {
                      color: "#DD1544",
                      opacity: 1,
                    },
                    "& .MuiButton-endIcon": {
                      color: "#DD1544",
                      opacity: 1,
                    },
                  },
                },
                "& .MuiButton-startIcon": {
                  transition: "all .9s",
                  opacity: 0,
                },

                "& .MuiButton-endIcon": {
                  transition: "all .9s",
                  opacity: 0,
                },
              }}
            >
              <ListItem disablePadding>
                <Button
                  variant="text"
                  sx={{ color: "white" }}
                  startIcon={<ArrowRightSharp />}
                  endIcon={<ArrowLeftSharp />}
                >
                  Continue
                </Button>
              </ListItem>
              <ListItem disablePadding>
                <Button
                  variant="text"
                  sx={{ color: "white" }}
                  startIcon={<ArrowRightSharp />}
                  endIcon={<ArrowLeftSharp />}
                >
                  Restart
                </Button>
              </ListItem>
              <ListItem disablePadding>
                <Button
                  variant="text"
                  sx={{ color: "white" }}
                  startIcon={<ArrowRightSharp />}
                  endIcon={<ArrowLeftSharp />}
                >
                  Options
                </Button>
              </ListItem>
              <ListItem disablePadding>
                <Button
                  variant="text"
                  sx={{ color: "black" }}
                  startIcon={<ArrowRightSharp />}
                  endIcon={<ArrowLeftSharp />}
                >
                  Quit
                </Button>
              </ListItem>
            </List>
          </nav>
        </Stack>
      </Box>
    </Box>
  );
};

export default App;
