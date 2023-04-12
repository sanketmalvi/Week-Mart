import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { Box } from "@mui/material";

const ImageSlider = () => {
  const images =
   [
    "https://serving.photos.photobox.com/913817007224654a888939bb720c85c33bc4a58d0c2650ad683b143e95f753566f295639.jpg",
    "https://serving.photos.photobox.com/725767965908316bd4a23ec5fd7ec3b7dd7007666df309ffa87192ef8ea7005f9875bbe7.jpg",
    "https://serving.photos.photobox.com/979837795a5a5ceef9febf357d65ace92b2179c382d7a72852591450804f429355b4e116.jpg",
    // "https://sslimages.shoppersstop.com/sys-master/root/hde/hc6/28356842291230/footwear_Top-Banner-web20220929_0.jpg",
  ];
  return (
    <Box
      // disableGutters
      padding={{ xs: "5px 0px", md: "10px 0px" }}
    >
      <Carousel>
        {images.map((item) => (
          <Carousel.Item interval={4000}>
            <img className="d-block w-100" src={item} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageSlider;
