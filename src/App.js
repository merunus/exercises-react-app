import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { ExerciseDetail, Favorites, Home } from "./pages";
import { Navbar, Footer, Sidebar } from "./components";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
          <Navbar />
          <Sidebar /> 
          <Routes>
            <Route path="/exercises-react-app" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
          <ToastContainer position="top-center" />
        </Box>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
