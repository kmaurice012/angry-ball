import type { Component } from "solid-js";
import { Stack } from "@suid/material";
import { List, ListItemButton, Box, Typography } from "@suid/material";
import { MenuList,MenuItem,ListItemIcon,ListItemText,Divider } from "@suid/material";

import logo from "../logo.svg";
import styles from "../App.module.css";
import { Cloud, ContentCopy, ContentCut, ContentPaste } from "@suid/icons-material";

const App: Component = () => {
  return (
    <Box class={styles.App} bgcolor="#FF164C" color="white">
      <Box
        width={450}
        height={550}
        bgcolor="rgba(255, 255, 255, 0.23)"
        borderRadius={"16px"}
        sx={{
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(1.6px)",
        }}
        border={"1px solid rgba(255, 255, 255, 1)"}
      >
        {/* <Stack>
          <Typography variant="h3" marginTop={4} gutterBottom>
            Game Menu
          </Typography>
          <Stack textAlign="center" alignSelf="center">
            <List component="nav">
              <ListItemButton>MenuItem
                <Typography variant="h5" marginTop={4} gutterBottom>
                  New Game
                </Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography variant="h5"  gutterBottom>
                  Resume
                </Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography variant="h5"  gutterBottom>
                  Options
                </Typography>
              </ListItemButton> 
              <ListItemButton>
                <Typography variant="h5"  gutterBottom>
                  Quit
                </Typography>
              </ListItemButton>
              
            </List>
          </Stack>
        </Stack> */}
         <Stack>
          <Typography variant="h3" marginTop={4} gutterBottom>
            Game Menu
          </Typography>
          </Stack>
          <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
      </Box>
    </Box>
  );
};

export default App;
