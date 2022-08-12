import styled from "@emotion/styled";
import {
  CalendarMonth,
  Check,
  ExpandMore,
  Language,
  PeopleAlt,
  Subtitles,
} from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Button,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ContentList from "../components/course/ContentList";
import RatingBar from "../components/RatingBar";
import courses from "../courses";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "720px",
  paddingLeft: "2rem",
  [theme.breakpoints.down("md")]: {
    maxWidth: "600px",
  },
}));
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));
const data = [
  "Create dynamic web apps using the latest in web technology",
  "Practice your skills with many large projects, exercises, and quizzes",
  "Become fluent in the toolchain supporting React, including NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax",
  "Realize the power of building reusable components",
  "Acquire the programming skills needed to obtain a software engineering job",
  "Master the fundamentals concepts behind React and Redux",
  "Be the engineer who explains how Redux works to everyone else, because you know the fundamentals so well",
];
const CourseDetail = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: "100vw",
    }}
  >
    <Box
      component={"div"}
      sx={{
        padding: "2rem 6rem",
        color: "#ffffff",
        backgroundColor: "#1C1D1F",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <HeaderContainer lineHeight={2} flexGrow={0.3}>
        <Typography variant={"h5"} component={"h5"}>
          React JS: The Complete Developer's Guide
        </Typography>
        <Typography component={"p"}>
          Master Typescript by learning popular design patterns and building
          complex projects. Includes Next Js, Typscript, and Express!
        </Typography>
      </HeaderContainer>
      <HeaderContainer lineHeight={2} flexGrow={0.3}>
        <Typography>
          <Box display={"flex"}>
            <Icon sx={{ marginRight: 1 }} fontSize="small">
              <PeopleAlt />
            </Icon>
            <span>Created by &nbsp; </span>
            <AvatarGroup total={3}>
              <SmallAvatar alt="Animaw Bayi (PhD)" src="" />
              <SmallAvatar alt="Gopi Krishna (PhD)" src="" />
              <SmallAvatar alt="Galata Waqo(PhD)" src="" />
            </AvatarGroup>
          </Box>
        </Typography>
        <Typography>
          <Icon sx={{ marginRight: 1 }} fontSize="small">
            <CalendarMonth />
          </Icon>
          <span>Last updated: 08/2022</span>
        </Typography>
        <Typography>
          <Icon sx={{ marginRight: 1 }} fontSize="small">
            <Language />
          </Icon>
          <span>
            English
            <Icon sx={{ marginRight: 1, marginLeft: 1 }} fontSize="small">
              <Subtitles />
            </Icon>
            English [Auto], Amharic [Auto] ,<span>5 more</span>
          </span>
        </Typography>
        <RatingBar />
      </HeaderContainer>

      <Box flexGrow={0.7} />
    </Box>
    <Container maxWidth="lg">
      <Box border={"1px solid"} mt={2}>
        <Typography p={2} variant="h4" fontWeight={600}>
          What you'll learn
        </Typography>
        <Box display={"flex"} flexDirection="row" flexWrap="wrap">
          {data.map((item) => (
            <Box maxWidth={"400px"}>
              <ListItem desablepadding>
                <ListItemIcon key={item}>
                  <Check />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            </Box>
          ))}
        </Box>
      </Box>
      <Box border={"1px solid"} mt={2}>
        <Typography p={1} compontent={"p"}>
          Our React.JS Course equips the learner for developing a single-page or
          mobile applications and creates reusable components for web pages and
          mobile applications. We have designed React.JS Course Syllabus by
          industry experts as per the requirements of current trends. The
          React.JS Course Curriculum contains basic elements like introduction,
          JSX overview, Environmental setup, real-time applications, forms and
          UI, Component Lifecycle, Event Handling, and Styles along with
          advanced features such as router and navigations, Flux, Redux, and
          Unit testing methods. Check out the detailed React.JS Course Content
          below.
        </Typography>
      </Box>
    </Container>
    <Container maxWidth="xl">
      <Box py={2}>
        <Typography pt={4} variant="h5" compontent={"h5"}>
          React Js Course Content
        </Typography>
        <ContentList />
        <Button
          sx={{
            width: "100%",
            marginTop: "1rem",
            "&:hover": {
              backgroundColor: "#00695c",
              color: "#fff",
            },
          }}
          variant="outlined"
          color="primary"
          aria-label="more"
        >
          <ExpandMore />
          Learn More
        </Button>
        <Container maxWidth="xl">
          <Grid mt={2} direction="row" container spacing={2}>
            <Grid mt={-5} item xs={12} md={6} lg={3}>
              <Box
                boxShadow={"0 0 5px 2px #bcbcbc"}
                borderTop={"3px solid #00695c"}
                borderLeft={"5px solid #00695c"}
                m={2}
              >
                <Paper>
                  <Typography component={"p"} p={2}>
                    Learn the best React.JS Course in Ethiopia to create and
                    manage view layers of web pages and mobile apps. Our
                    trainers are skilled and certified to provide comprehensive
                    coaching with hands-on exposure. Connect us at +251 22545786
                    for more information about React.JS Training
                  </Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={0} md={6} lg={9}>
              <Typography variant="h5" compontent="h5">
                You may also also like
              </Typography>
              <Box display="flex" flexWrap="wrap">
                {courses.map(({ title, logo, about }, index) => (
                  <Box m={1}>
                    <Paper elevation={2} minWidth={300}>
                      <ListItem button key={index + about}>
                        <ListItemAvatar>
                          <Avatar
                            variant="rounded"
                            alt="Course logo"
                            src={logo}
                          />
                        </ListItemAvatar>
                        <ListItemText primary={title} secondary={about} />
                      </ListItem>
                    </Paper>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  </Box>
);

export default CourseDetail;
