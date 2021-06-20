import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../../../img/img1.jpeg";

const Navigation = () => {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li>
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sobre" activeClassName="active-class" exact>
            Sobre
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class" exact>
            resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios" activeClassName="active-class" exact>
            Porfólio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" activeClassName="active-class" exact>
            blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contato" activeClassName="active-class" exact>
            Contato
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2021 Portfólio: Marlon Dener</p>
      </footer>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    width: 80%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 1rem;
    img {
      width: 100%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
      object-fit: cover;
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    li {
      position: relative;
      display: block;
      .active-class {
        background: linear-gradient(
          180deg,
          rgb(80, 16, 184) 52%,
          #4819c9 76%,
          #7184ec 180%
        );
        color: #fff;
      }
      a:hover {
        cursor: pointer;
        color: var(--white-color);
      }
      a {
        display: block;
        padding: 0.4rem 0;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
      }

      a::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 50%;
        background-color: var(--primary-color);
        z-index: 3;
        transition: all 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
        opacity: 0.21;
        transform-origin: bottom;
        z-index: -1;
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1rem 0;
      font-size: 0.8rem;
      display: block;
      text-align: center;
    }
  }
`;

export default Navigation;
