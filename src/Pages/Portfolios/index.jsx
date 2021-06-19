import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../../styles/Layouts";
import Title from "../../components/Title/Title";
import Portfolios from "../../data/Portfolios";
import Menu from "../../components/Menu/Menu";
import Button from "../../components/Button/index";

const allButtons = ["All", ...new Set(Portfolios.map((item) => item.category))];

const PortfoliosPage = () => {
  const [menuItem, setMenuItem] = useState(Portfolios);
  const [button, setButton] = useState(allButtons);
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(Portfolios);
      return;
    }
    const filteredData = Portfolios.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };
  return (
    <MainLayout>
      <Title title="Portfolios" span="Portfolios" />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
};

export default PortfoliosPage;
