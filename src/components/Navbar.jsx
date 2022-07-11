import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";
import { FaBars } from "react-icons/fa";
import { useExercisesContext } from "../context/exercisesContext";
const Navbar = () => {
  const {isSidebarOpen, openSidebar} = useExercisesContext()




  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
      }}
      px="20px"
    >
      <Link to="/exercises-react-app">
        <img
          src={Logo}
          style={{ width: "200px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="center"
        sx={{ justifyContent: { xs: "space-between" } }}
      >
        <Link
          to="/exercises-react-app"
          style={{
            textDecoration: "none",
            // borderBottom: "3px solid #d32f2f",
          }}
          className="navbar-links"
        >
          Home
        </Link>
        <Link
          to="/favorites"
          style={{
            textDecoration: "none",
            // borderBottom: "3px solid #d32f2f",
          }}
          className="navbar-links"
        >
          Favorites
        </Link>
        
        {/* <a
          onClick={(e) => window.scrollTo({ top: 1800, behavior: "smooth" })}
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
          sx={{ display: { lg: "auto", xs: "none" } }}
          className="navbar-links"
        >
          Exercises
        </a> */}
        <a className="navbar-links-bars" onClick = {openSidebar}>
          <FaBars />
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
