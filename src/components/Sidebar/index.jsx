import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Sidebar = ({ navToggle }) => {
  return (
    <SidebarStyled>
      <div className={`navbar ${navToggle ? "nav-toggle " : " "}`}>
        <Navigation />
      </div>
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  .navbar {
    width: 15rem;
    height: 100%;
    background-color: var(--sidebar-dark-color);
    position: fixed;
    z-index: 7;
    overflow: hidden;
    transition: all 0.4s ease-out;
  }

  @media (max-width: 1100px) {
    .navbar.nav-toggle {
      transition: all 0.4s ease-in-out;
      transform: translateX(-100%);
    }
  }
`;

export default Sidebar;
