import { Box } from "@mui/material";
import { Carousel } from "react-carousel-minimal";
import events from '../events'

let data = events.map((event) =>({ image: event.image, caption: event.name }))

function CarouselComponent() {
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <Box>
      <Carousel
        data={data}
        time={5000}
        width="100%"
        height="500px"
        captionStyle={captionStyle}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        style={{
          textAlign: "center",
          maxWidth: "1200px",
          maxHeight: "500px",

          margin: "auto ",
        }}
      />
    </Box>
  );
}

export default CarouselComponent;
