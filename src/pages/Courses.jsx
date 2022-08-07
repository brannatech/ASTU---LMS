import { Grid, Pagination, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../components/AppBarResponsive";
import Footer from "../components/Footer";
import Post from "../components/Post";
import courses from "../courses";

const Courses = ({ mode, setMode }) => {
  return (
    <Stack>
      <Grid container>
        <Grid item xs={12}>
          <Navbar setMode={setMode} mode={mode} />
        </Grid>
        <Grid item xs={12} lg={9}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Grid
              gap={3}
              item
              sx={{
                padding: {
                  xs: 2,
                  md: 8,
                },
                paddingTop:0,
                display: { sm: "grid", xs: "block" },
                gridTemplateColumns: {
                  md: "repeat(2, 1fr)",
                  xl: "repeat(3, 1fr)",
                },
              }}
            >
              {courses.map((course) => (
                <Post key={course.id} course={course} />
              ))}
            </Grid>
            <Pagination sx={{paddingBottom:4, marginTop:-2}}
              count={99}
              variant="outlined"
              color="primary"
            />
            {/* <Button
        color="info"
        sx={{
          marginTop: { xs: 0, sm: -4 },
          transition: "all .4s",
          "&:hover": {
            transform: "ScaleX(1.25)",
            borderRadius: 4,
            border: "0.75px solid rgba(38,159,159,0.25)",
          },
        }}
        size="large"
        variant="text"
      >
        See More
      </Button> */}
          </Box>
        </Grid>
        <Grid item lg={3} bgcolor={"#cfe8fc"} display={{xs: "none", lg: "block" }}>
          <Box position={"static"} minWidth={100} height={"100%"}>
            Filters goes here
          </Box>
        </Grid>
      </Grid>
      <Footer/>
    </Stack>
  );
};

export default Courses;
