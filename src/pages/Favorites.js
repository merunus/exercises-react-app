import React, { useEffect } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import FavoriteRows from "../components/FavoriteRows";
import { useFavoritesContext } from "../context/favoritesContext";
import FavoriteCart from "../components/FavoriteCart";
import EmptyFavoritesImage from "../assets/images/emptyImage.svg";
const Favorites = () => {
  const { favorites } = useFavoritesContext();



  if (favorites.length < 1) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        sx={{
          marginBottom: {
            lg: "10%",
            xs: "90%",
          },
          marginTop: { lg: "10%", xs: "50%" },
        }}
      >
        <Box sx={{ display: { lg: "block", xs: "none" } }}>
          <img style={{ width: "500px" }} src={EmptyFavoritesImage} />
        </Box>
        <Typography
          marginBottom="40px"
          fontFamily="Poppins, sans-serif"
          textAlign="center"
          fontSize="1.5em"
          lineHeight="50px"
        >
          Your favorite list is currently empty.
          <br />
          Fill it with fantastic exercises!
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <FavoriteRows />
      {favorites.map((favorite, index) => {
        return <FavoriteCart key={index} favorites={favorite} />;
      })}
    </Box>
  );
};

export default Favorites;
