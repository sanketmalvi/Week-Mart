import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const GridCategories = () => {
  const imgArr = [
    "https://serving.photos.photobox.com/4618359051aaebe7c4f1594c47ec25e8a4805f6581ba198f3873560f603a4aa04b00513c.jpg",
    "https://cdn.shopify.com/s/files/1/0080/5801/1729/products/VandaTerracottaPot3.jpg?v=1648457634",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoORp6B8U6zCzedCK9zBkK0A8pGCdn-JbdeTWE3PUrviJQi24ReOI6Lh1D6m9UnanKWY&usqp=CAU",
    "https://serving.photos.photobox.com/970383132029ab89ffe5fc53f1ce26d85ffc1f00f4a37c1e474a2b3c54ad9cccf63431fb.jpg",
  ];
  return (
    <Box padding={"30px 0"}>
      <Grid container spacing={1}>
        {imgArr.map((image) => (
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <Box
              className="category-image"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={420}
              sx={{
                backgroundPosition: "center",
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <Button
                className="category-img-btn"
                // sx={{ display: "none" }}
                variant="outlined"
              >
                Shop Now
              </Button> */}
            </Box>
          </Grid>
        ))}

        <Grid item xs={12} sm={6} md={4}>
          <Box
            className="category-image"
            height={420}
            sx={{
              backgroundPosition: "center",
              backgroundImage: `url(${"https://thevillagecraftstore.com/wp-content/uploads/2020/12/Bamboo-Cup-%E2%80%93-Designer.jpg"})`,
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            className="category-image"
            height={420}
            sx={{
              backgroundPosition: "center",
              backgroundImage: `url(${"https://www.goindigo.in/content/dam/indigov2/6e-website/destinations/shillong/BambooCraft.jpg"})`,
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} display={{ sm: "none", md: "block" }}>
          <Box
            className="category-image"
            height={420}
            sx={{
              backgroundPosition: "center",
              backgroundImage: `url(${"https://images.news18.com/ibnlive/uploads/2021/03/1615457169_rtr1wny2.jpg?impolicy=website&width=510&height=356"})`,
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GridCategories;
