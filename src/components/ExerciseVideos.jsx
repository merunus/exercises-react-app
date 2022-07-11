import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { capitalizeFirstLetter } from "../utils/capitalizer";

const ExerciseVideos = ({ exerciseVideos, name }) => {
    if(!exerciseVideos.length) return "Loading..."
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" marginBottom="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}{" "}
        </span>
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "50px", xs: "0" },  }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => {
          return <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            className="exercise-video"
            target="_blank"
            rel="noreferrer"
          >
            <img style = {{borderRadius: "10px"}} src = {item.video.thumbnails[0].url} alt = {item.video.title} />
            <Box>
                <Typography variant = "h6" color = "black">
                    {item.video.title}
                </Typography>
            </Box>
          </a>;
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
