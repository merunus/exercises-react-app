import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import logo from "../assets/images/Logo.png";
import { useExercisesContext } from "../context/exercisesContext";
const Sidebar = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isSidebarOpen, closeSidebar } = useExercisesContext();

  const handleExerciseButton = (e) => {
    window.scrollTo({ top: 1800, behavior: "smooth" });
    closeSidebar();
  };

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
        // className="sidebar show-sidebar"
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" />
          <button onClick={closeSidebar} className="close-btn" type="button">
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          <li onClick={closeSidebar}>
            <Link to="/exercises-react-app">Home</Link>
          </li>
          <li onClick={closeSidebar}>
            <Link to="/favorites">Favorites</Link>
          </li>

          
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: all 0.3s linear;
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: capitalize;
    text-decoration: none;
    padding: 1rem 1.5rem;
    transition: all 0.3s linear;
    color: #000;
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    color: #000;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
