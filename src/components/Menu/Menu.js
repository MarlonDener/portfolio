import React from "react";
import styled from "styled-components";
import GitHub from "@material-ui/icons/GitHub";

const Menu = ({ menuItem }) => {
  return (
    <MenuItemStyled>
      {menuItem.map((item) => {
        return (
          <div class="grid-item" key={item.id}>
            <LinkForGit href="#">
              <div className="portfolio-content">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <ul>
                  <li>
                    <a href={item.link1}>
                      <GitHub fontSize={"medium"} />
                    </a>
                  </li>
                </ul>
              </div>
            </LinkForGit>
            <div class="about_project">
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </MenuItemStyled>
  );
};
const LinkForGit = styled.a``;

const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  .grid-item {
    border-width: 7px;
    border-style: solid;
    border-color: transparent;
    transition: 0.3s ease-in;
    box-shadow: 0.3rem 0.6rem 2rem 0.2rem rgba(0, 0, 0, 0.4);
    cursor: pointer;
    &:hover {
      background-color: #000;
      border-color: var(--primary-color);
      box-shadow: 0.3rem 0.6rem 2rem 0.2rem var(--primary-color);
    }
    &:hover img {
      opacity: 0.7;
    }
    .portfolio-content {
      display: block;
      position: relative;

      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.4rem 0;
      }
    }
    h6 {
      font-size: 1.1rem;
      padding: 5px 0;
    }
    .about_project {
      padding: 5px 15px;
    }
    p {
      font-size: 0.95rem;
      padding-bottom: 0.7rem;
    }
  }
`;

export default Menu;
