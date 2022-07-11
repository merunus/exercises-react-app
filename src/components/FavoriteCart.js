import React from "react";
import { capitalizeFirstLetter } from "../utils/capitalizer";
import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { Box, Stack, Typography, Button } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import Back from "../assets/icons/back.png";
import Chest from "../assets/icons/chest.png";
import LowerLegs from "../assets/icons/lower legs.png";
import Shoulders from "../assets/icons/shoulders.png";
import UpperArms from "../assets/icons/upper arms.png";
import UpperLegs from "../assets/icons/upper legs.png";
import Waist from "../assets/icons/waist.png";
import { useFavoritesContext } from "../context/favoritesContext";

const FavoriteCart = ({ favorites }) => {
  const { id, name, gifUrl, equipment, target, bodyPart } = favorites;
  const { removeFromFavorites } = useFavoritesContext();

  return (
    <Stack
      direction="row"
      marginBottom="20px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        style={{ display: "flex", alignItems: "center" }}
        sx={{
          flexDirection: { lg: "column", xs: "row" },
          ml: { lg: "100px", xs: "0" },
        }}
      >
        <Link to={`/exercise/${id}`}>
          <img style={{ width: "170px", height: "170px" }} src={gifUrl} />
        </Link>
        <Stack>
          <Typography
            sx={{
              display: { lg: "none", xs: "auto" },
              fontSize: { lg: "1.3em", xs: "1.2em" },
              mt: { lg: "10px", xs: "0" },
            }}
            fontWeight="bold"
          >
            {capitalizeFirstLetter(name)}
          </Typography>
          <Typography
            color="#686666"
            sx={{ display: { lg: "none", xs: "block" } }}
          >
            {capitalizeFirstLetter(bodyPart)}
          </Typography>
          <Typography
            color="#686666"
            sx={{ display: { lg: "none", xs: "block" } }}
          >
            {capitalizeFirstLetter(target)}
          </Typography>
          <Typography
            color="#686666"
            sx={{ display: { lg: "none", xs: "block" } }}
          >
            {capitalizeFirstLetter(equipment)}
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ display: { lg: "block", xs: "none" } }}>
        <img
          src={
            bodyPart === "all"
              ? Icon
              : bodyPart === "back"
              ? Back
              : bodyPart === "chest"
              ? Chest
              : bodyPart === "lower legs"
              ? LowerLegs
              : bodyPart === "upper arms"
              ? UpperArms
              : bodyPart === "upper legs"
              ? UpperLegs
              : bodyPart === "waist"
              ? Waist
              : bodyPart === "shoulders"
              ? Shoulders
              : Icon
          }
        />
      </Box>
      <Typography
        fontSize="1.5em"
        fontWeight="bold"
        sx={{ display: { lg: "block", xs: "none" } }}
        mr="35px"
      >
        {capitalizeFirstLetter(target)}
      </Typography>
      <Typography
        fontSize="1.5em"
        fontWeight="bold"
        sx={{ display: { lg: "block", xs: "none" } }}
      >
        {capitalizeFirstLetter(equipment)}
      </Typography>
      <Box>
        <TiDelete
          style={{ fontSize: "2em", cursor: "pointer" }}
          onClick={() => removeFromFavorites(id)}
        />
      </Box>
    </Stack>
  );
};

export default FavoriteCart;
