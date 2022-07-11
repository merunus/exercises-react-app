import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import sportImage2 from "../assets/images/sport-image1.svg";
import sportImage4 from "../assets/images/sport-image4.svg";

const HeroBanner = () => {
  const handleClick = (e) => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, mb: { lg: "212px", xs: "0" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#d32f2f" fontWeight="700" fontSize="30px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "55px ", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile and <br /> Repeat!
      </Typography>

      <Button
        // window.scrollTo({ top: 1800, behavior: "smooth" });
        variant="contained"
        color="error"
        onClick={handleClick}
        sx={{
          backgroundColor: "#ff2625",
          padding: "10px",
        }}
      >
        Explore exercises
      </Button>
      {/* <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="170px"
      >
        Exercise
      </Typography> */}
      <img src={sportImage4} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
