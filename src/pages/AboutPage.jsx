import { School } from "@mui/icons-material";
import { Box, Button, Icon, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React from "react";
import LogoBox from "../components/LogoBox";

const AboutPage = () => {
  const items = ["", "", ""];
  return (
    <Box component="div">
      <Box className="bgimg-1">
        <Box className="caption">
          <span className="border">ABOUT US</span>
        </Box>
      </Box>

      <Box
        style={{
          color: "#777",
          backgroundColor: "white",
          textAlign: "center",
          padding: "50px 80px",
        }}
      >
        <Box
          display={"flex"}
          flexDirection="column"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box p={3} display="flex" alignItems={"center"} flexDirection={"row"}>
            <LogoBox>
              <Box>
                <img
                  style={{
                    borderRadius: "50%",
                    opacity: "20%",
                  }}
                  src="/images/astu-logo.png"
                  alt=""
                />
              </Box>
            </LogoBox>
            <Box
              sx={{
                margin: { xs: 2, sm: 4 },
              }}
              p={1}
              maxWidth={600}
            >
              <Typography
                fontFamily="Dejavu Sans"
                textAlign={"left"}
                lineHeight={2}
              >
                Astu learning management is Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Deleniti quis molestias odio velit
                blanditiis! Unde, necessitatibus ullam alias accusamus nisi est
                voluptatum distinctio consectetur perspiciatis ipsa. Nostrum
                quod illum dolore? Astu learning management is Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Deleniti quis molestias
                odio velit blanditiis! Unde, necessitatibus ullam alias
                accusamus nisi est voluptatum distinctio consectetur
                perspiciatis ipsa. Nostrum quod illum dolore? Astu learning
                management is Lorem ipsum dolor sit amet...
                <Button
                  sx={{
                    textDecoration: "underline",
                    overflow: "hidden",
                    transition: "all .4s",
                    "&:hover": { background: "none", transform: "Scale(1.25)" },
                  }}
                >
                  More
                </Button>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="bgimg-2">
        <Box className="caption">
          <Box p={2} gap={2} justifyContent={"center"} display={{lg:"flex"}}>
            {items.map((item) => (
              <Box
                bgcolor={alpha("#000", 0.2)}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Icon>
                  <School />
                </Icon>
                <span
                  className="border"
                  style={{
                    backgroundColor: "transparent",
                    fontSize: "25px",
                    color: "#f7f7f7",
                  }}
                >
                  Over 10,000 Lectures
                </span>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box style={{ position: "relative" }}>
        <Box
          style={{
            color: "#ddd",
            backgroundColor: "#282E34",
            textAlign: "center",
            padding: "50px 80px",
          }}
        >
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </Box>
      </Box>

      <Box className="bgimg-3">
        <Box className="caption">
          <span
            className="border"
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              color: "#f7f7f7",
            }}
          >
            SCROLL UP
          </span>
        </Box>
      </Box>

      <Box style={{ position: "relative" }}>
        <Box
          style={{
            color: "#ddd",
            backgroundColor: "#282E34",
            textAlign: "center",
            padding: "50px 80px",
          }}
        >
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </Box>
      </Box>

      <Box className="bgimg-1">
        <Box className="caption">
          <span className="border">COOL!</span>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
