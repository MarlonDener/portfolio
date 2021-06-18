import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <SidebarStyled>
      <Navigation />
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  width: 15rem;
  height: 100%;
  background-color: var(--sidebar-dark-color);
  position: fixed;
  z-index: 7;
`;

export default Sidebar;
