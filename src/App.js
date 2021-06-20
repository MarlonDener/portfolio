import { useState, useEffect } from "react";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import Sidebar from "./components/Sidebar";
import About from "./Pages/About/index";
import Resume from "./Pages/Resume/index";
import Blogs from "./Pages/Blogs/index";
import Portfolios from "./Pages/Portfolios/index";
import Contato from "./Pages/Contact/index";
import { Switch as Switching, Route } from "react-router-dom";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Switch from "@material-ui/core/Switch";
import MenuIcon from "@material-ui/icons/Menu";

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [colorParticles, setColorParticles] = useState("#fff");
  const [Format, setFormat] = useState("star");
  const [navToggle, setNavToggle] = useState(true);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      console.log("errado");
      setTheme("dark-theme");
      setColorParticles("#fff");
      setFormat("star");
      setChecked(false);
    } else {
      console.log("tudo ok");
      setTheme("light-theme");
      setColorParticles("#0a1bcf");
      setFormat("circle");
      setChecked(true);
    }
  };
  const changeMenu = () => {
    setNavToggle(!navToggle);
  };

  return (
    <GlobalApp>
      <div className="menu-icon" onClick={changeMenu}>
        <IconsButton>
          <MenuIcon
            onClick={() => changeMenu}
            color={"primary"}
            fontSize={"inherit"}
          />
        </IconsButton>
      </div>
      {/*
        <Whatsapp>
          <WhatsAppIcon fontSize={"large"} style={{ color: "#5df255" }} />
        </Whatsapp>
        */}
      <Sidebar navToggle={navToggle} />
      <div className="light-dark-mode">
        <div className="left-content">
          <Brightness4Icon />
        </div>
        <div className="right-content">
          <Switch
            value=""
            inputProps={{ "aria-label": "" }}
            checked={checked}
            onClick={themeToggler}
            color={"primary"}
          />
        </div>
      </div>

      <MainContentStyled>
        <div className="theme">
          <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div>
        </div>

        <Switching>
          <Route path="/" exact>
            <HomePage colorParticles={colorParticles} Format={Format} />
          </Route>
          <Route path="/sobre" exact>
            <About />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          <Route path="/blogs" exact>
            <Blogs />
          </Route>
          <Route path="/portfolios" exact>
            <Portfolios />
          </Route>
          <Route path="/contato" exact>
            <Contato />
          </Route>
        </Switching>
      </MainContentStyled>
    </GlobalApp>
  );
}
const GlobalApp = styled.div`
  .menu-icon {
    display: none;
  }
  @media (max-width: 900px) {
    .menu-icon {
      display: flex;
      position: absolute;
      right: 5%;
      top: 4%;
    }
  }
`;
const IconsButton = styled.div`
  cursor: pointer;
  z-index: 100;
  font-size: 65px;
  svg:hover {
    transition: 0.2s ease-in;
    color: #fff;
  }
`;
const Whatsapp = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
`;
const MainContentStyled = styled.main`
  position: relative;
  margin-left: 15rem;
  transition: all 0.4s ease-in-out;
  @media (max-width: 1100px) {
    margin-left: 0;
  }
  min-height: 100vh;
  z-index: 3;

  .lines {
    z-index: -1;
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
      opacity: 0.3;
      z-index: -1;
    }
  }

  //Nav toggle
`;

export default App;
