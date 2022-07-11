import React from "react";
import { Stack, Typography } from "@mui/material";
const FavoriteRows = () => {

  return (
    <Stack
      sx={{
        mt: { lg: "70px", xs: "30px" },
        mb: { lg: "70px", xs: "30px" },
        opacity: { lg: "1", xs: "0" },
        pb: { lg: "30px" },
      }}
      direction="row"
      justifyContent="space-evenly"
      borderBottom="2px solid gray"
    >
      <Typography color="#CB4335" variant="h5">Exercise</Typography>
      <Typography color="#CB4335" variant="h5">Muscle Group</Typography>
      <Typography color="#CB4335" variant="h5">Target</Typography>
      <Typography color="#CB4335"variant="h5">Equipment</Typography>
    </Stack>
  );
};

export default FavoriteRows;
