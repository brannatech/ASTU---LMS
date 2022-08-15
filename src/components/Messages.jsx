import {
  Avatar,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Messages = () => {
  return (
    <List sx={{ maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItemButton alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
      <ListItemButton alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
      <ListItemButton alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </React.Fragment>
          }
        />
      </ListItemButton>
    </List>
  );
};

export default Messages;
