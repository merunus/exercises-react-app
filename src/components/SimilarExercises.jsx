import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {

  return (
    <Box  sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant = "h4" mb = {5} >Exercises that target the <span style = {{color: "#ff2625"}}>same muscle group!</span></Typography>
      <Stack  mb={10} direction = "row" sx = {{p : "2" , position : "relative"}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data = {targetMuscleExercises}/> : <Loader/>}
      </Stack>
      <Typography variant = "h4" mb = {5} >Exercises that use <span style = {{color: "#ff2625"}}>same equipment!</span></Typography>
      <Stack direction = "row" mb={10} sx = {{p : "2" , position : "relative"}}>
        {equipmentExercises.length ? <HorizontalScrollbar data = {equipmentExercises}/> : <Loader/>}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
