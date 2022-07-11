import React, { useEffect } from "react";
import { Button, Stack, Typography } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { capitalizeFirstLetter } from "../utils/capitalizer";
import { useFavoritesContext } from "../context/favoritesContext";
import Icon from "../assets/icons/gym.png";
import Back from "../assets/icons/back.png";
import Chest from "../assets/icons/chest.png";
import LowerLegs from "../assets/icons/lower legs.png";
import Shoulders from "../assets/icons/shoulders.png";
import UpperArms from "../assets/icons/upper arms.png";
import UpperLegs from "../assets/icons/upper legs.png";
import Waist from "../assets/icons/waist.png";
import { toast } from "react-toastify";

const Detail = ({ exerciseDetail }) => {
  const { addToFavorites, favorites } = useFavoritesContext();
  const { bodyPart, gifUrl, name, target, equipment, id } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="detail-image"
      ></img>
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography textTransform="capitalize" variant="h3" fontWeight="bold">
          {name}
        </Typography>
        <Button
          variant="contained"
          color={favorites.some((item) => item.id === id) ? "success" : "error"}
          style={{ width: "250px" }}
          onClick={() => {
            if (favorites.some((item) => item.id === id)) {
              toast("Already added!", {type: "info", autoClose: 2000,});
            } else {
              addToFavorites(exerciseDetail);
              toast("Succesfuly added!", {type: "success", autoClose: 2000,});
            }
          }}
        >
          {favorites.some((item) => item.id === id)
            ? "Already added"
            : "Add to favorites"}
        </Button>
        <Typography variant="h6" color="#524f4f">
          Exercises keep you strong. {` `}
          {capitalizeFirstLetter(name)} {` `} is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy
        </Typography>
        {extraDetail.map((item, index) => {
          return (
            <Stack key={index} direction="row" gap="24px" alignItems="center">
              <Button
                sx={{
                  background: "#ff2db",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={item.icon}
                  alt={bodyPart}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography variant="h5" textTransform="capitalize">
                {item.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Detail;
