import { Book, Quiz, School } from "@mui/icons-material";
import { Box, Button, Icon, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React from "react";
import LogoBox from "../components/LogoBox";

const AboutPage = () => {
  const items = [
    [<School />, "Over 10,000 lectures"],
    [<Book />, "Over 100,000 books"],
    [<Quiz />, "Over 20,000 Quizes"],
  ];
  return (
    <Box component="div">
      <Box className="box1">
        <Box className="caption">
          <span className="border .about-title">ABOUT US</span>
        </Box>
      </Box>

      <Box
        style={{
          color: "#777",
          backgroundColor: "white",
          textAlign: "center",
          padding: "32px 16px",
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

      <Box className="box2">
        <Box className="caption">
          <Box
            gap={2}
            justifyContent={"center"}
            display={{ md: "block", lg: "flex" }}
          >
            {items.map((item) => (
              <Box key={item}
                mb={1}
                py={2}
                bgcolor={alpha("#000", 0.8)}
                display={"flex"}
                color={"white"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Icon color="info">{item[0]}</Icon>
                <Typography
                  sx={{
                    backgroundColor: "transparent",
                    fontSize: {sm:"16px",lg:"32px"},
                    fontWeight:"700",
                    color: "#f7f7f7",
                    letterSpacing: { sm: "3px", md: "5px" },
                  }}
                >
                  {item[1]}
                </Typography>
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
            padding: "48px 16px",
          }}
        >
          <h1>&ldquo;Investment in knowledge pays the best interest.&rdquo;</h1>
        </Box>
      </Box>

      <Box className="box3">
        <Box className="caption">
          <Typography
            color={"#f2f2ff"}
            variant="h3"
            component="h1"
            fontSize={"4vw"}
            letterSpacing={5}
            fontWeight={"800"}
            textTransform={"uppercase"}
            fontFamily="Nova Flat"
          >
            Reach out to us
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
