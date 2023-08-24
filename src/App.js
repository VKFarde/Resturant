import React, { useState } from "react";
import Menu from "./menuApi/Menu";
import Navbar from "./componand/Navbar/Navbar";
import Page from "./componand/Page/Page";
import "./App.css";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const App = () => {
  const [menu, setMenu] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (category) => {
    if (category === "All") {
      setMenu(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenu(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <Page menu={menu} />
    </>
  );
};

export default App;
