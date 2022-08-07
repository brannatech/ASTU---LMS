import { CssBaseline } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Navbar from "../components/AppBarResponsive";
import Footer from "../components/Footer";

const School = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar/>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
      <Footer/>
    </React.Fragment>
  );
};

export default School;
