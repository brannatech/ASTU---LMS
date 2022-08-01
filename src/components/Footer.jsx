import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "-16px !important",
          bottom: "0 !important",
          height: { sm: 200, md: 300 },
          width: "100%",
          backgroundColor: "#232323",
          color: "white", 
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: 5,
          }}
        >
          <Typography variant="h4" component="title" fontFamily="Nova Flat">Footer entry</Typography>
        </Box>
        <span style={{position:"relative",bottom:"16px"}}>
          <a style={{textDecoration: "none", color: "white" }} href="#home">
          &copy; 2022  Adama Science and Technology university.
          </a>
        </span>
      </Box>
    </footer>
  );
};

export default Footer;
