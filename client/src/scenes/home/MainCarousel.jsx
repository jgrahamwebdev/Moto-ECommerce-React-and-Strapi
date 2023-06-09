
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRef } from "react";
import ShoppingList from "./ShoppingList";
import Banner from "./Banner";


// Imports all images from assets folder
const importAll = (r) => 
    r.keys().reduce((acc, item) => {
        acc[item.replace("./", "")] = r(item);
        return acc;
    }, {});
  
// Grabs all the images from the 'assets' folder and specifies file types allowed
const heroTextureImports = importAll(
    require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
)

const MainCarousel = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    //used for scrolling down to ShoppingList page upon button click
    const ref = useRef(null);
    const doClick = () => ref.current?.scrollIntoView({behavior: 'smooth'})

    return (
      <>
        <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
            // BUTTONS
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateBeforeIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateNextIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
      >
        {/* IMAGE AND LINK BOX */}
        {Object.values(heroTextureImports).map((texture, index) => (
          <Box key={`carousel-image-${index}`}>
            <img
              src={texture}
              alt={`carousel-${index}`}
              style={{
                width: "100%",
                height: "650px",
                objectFit: "cover",
                backgroundAttachment: "fixed",
                marginTop: "60px"
              }}
            />
            {/* LINK BOX */}
            <Box
              color="white"
              padding="20px"
              borderRadius="1px"
              textAlign="left"
              backgroundColor="rgb(0, 0, 0, 0.65)"
              position="absolute"
              top="46%"
              left={isNonMobile ? "10%" : "0"}
              right={isNonMobile ? undefined : "0"}
              margin={isNonMobile ? undefined : "0 auto"}
              maxWidth={isNonMobile ? undefined : "240px"}
            >
              <Typography >NEW ITEMS</Typography>
              <Typography variant="h1">Riding Season Sale</Typography>
              <Typography
                fontWeight="bold"
                sx={{ textDecoration: "underline", cursor: "pointer" }} 
                onClick={doClick}
              >
                Discover More
              </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>

      <Banner />
      <div ref={ref}>
        <ShoppingList />
      </div>

      </>
    )
}

export default MainCarousel
