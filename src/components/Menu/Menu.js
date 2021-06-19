import React from "react";
import styled from "styled-components";
import GitHub from "@material-ui/icons/GitHub";
import Pinterest from "@material-ui/icons/Pinterest";

const Menu = ({ menuItem }) => {
  return (
    <MenuItemStyled>
      {menuItem.map((item) => {
        return (
          <div class="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
              </div>
              <ul>
                <li>
                  <a href={item.link1}>
                    <GitHub />
                  </a>
                </li>
                <li>
                  <a href={item.link2}>
                    <Pinterest />
                  </a>
                </li>
              </ul>
            </div>
            <h6>{item.title}</h6>
            <p>{item.text}</p>
          </div>
        );
      })}
    </MenuItemStyled>
  );
};

const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  .grid-item {
    .portfolio-content {
      display: block;
      position: relative;

      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
      ul {
        display: none;
      }
      .portfolio-image {
        position: relative;
      }
      .portfolio-image::before {
        content: "";
        position: absolute;
        left: 15px;
        top: 15px;
        height: calc(100% - 30px);
        width: calc(100% - 30px);
        background-color: #fff;
        opacity: 0.9;
        transform-origin: 0;
        transform: scale(0);
        transition: all 0.4s ease-in-out;
      }
    }
    h6 {
      font-size: 1.5rem;
    }
  }
`;

export default Menu;
