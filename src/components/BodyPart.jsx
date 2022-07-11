import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import Back from "../assets/icons/back.png";
import Chest from "../assets/icons/chest.png";
import LowerLegs from "../assets/icons/lower legs.png";
import Shoulders from "../assets/icons/shoulders.png";
import UpperArms from "../assets/icons/upper arms.png";
import UpperLegs from "../assets/icons/upper legs.png";
import Waist from "../assets/icons/waist.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  // console.log(item);
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img
        src={
            item === "back"
            ? Back
            : item === "chest"
            ? Chest
            : item === "lower legs"
            ? LowerLegs
            : item === "upper arms"
            ? UpperArms
            : item === "upper legs"
            ? UpperLegs
            : item === "waist"
            ? Waist
            : item === "shoulders"
            ? Shoulders
            : Icon
        }
        style={{ width: "70px", height: "70px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
