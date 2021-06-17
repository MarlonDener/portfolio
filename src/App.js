import "./App.css";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import Sidebar from "./components/Sidebar";
import About from "./Pages/About/index";
import Resume from "./Pages/Resume/index";
import Portfolios from "./Pages/Portfolios/index";
import Contato from "./Pages/Contact/index";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <GlobalApp>
      <Sidebar />
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/sobre" exact>
            <About />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolios />
          </Route>
          <Route path="/contato" exact>
            <Contato />
          </Route>
        </Switch>
      </MainContentStyled>
    </GlobalApp>
  );
}
const GlobalApp = styled.div``;
const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  z-index: 3;

  .lines {
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
`;

export default App;
