import React from "react";
import Navbar from "../components/AppBarResponsive";
import Rightbar from "../components/Rightbar";

import { Grid, Stack } from "@mui/material";
import PopularCourses from "./PopularCourses";
import ContactUs from "./ContactUs";
import AboutPage from "./AboutPage";
import Footer from "../components/Footer";
import CarouselComponent from "../components/Caresuel";

function Home({ mode, setMode }) {
  return (
    <Stack id="home"
      bgcolor={"background.default"}
      color={"text.primary"}
      spacing={2}
      direction="column"
    >
      <Grid container>
        <Grid item xs={12}>
          <Navbar setMode={setMode} mode={mode} />
        </Grid>
        <Grid item xs={12} sm={12} lg={9}>
          <CarouselComponent />
        </Grid>
        <Grid item md={12} lg={3}>
          <Rightbar />
        </Grid>
      </Grid>
      <PopularCourses />
      <AboutPage/>
      <ContactUs />
      <Footer />
    </Stack>
  );
}

export default Home;
