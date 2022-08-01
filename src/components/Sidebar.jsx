import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Stack,
  Button,
} from "@mui/material";
import React from "react";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Stack spacing={2} direction="horizontal">
      <Button variant="text" startIcon={<Home />}>
        Homepage
      </Button>
      <Button variant="text" startIcon={<AccountBox />}>
        schools
      </Button>
      <Button variant="text" startIcon={<Home />}>
        Courses
      </Button>
      <Button variant="text" startIcon={<Home />}>
        About Us
      </Button>
      <Button variant="text" startIcon={<Home />}>
        Contact Us
      </Button>

      <ListItem disablePadding>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <ModeNight />
          </ListItemIcon>
          <Switch
            onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
          />
        </ListItemButton>
      </ListItem>
    </Stack>
  );
};

export default Sidebar;
