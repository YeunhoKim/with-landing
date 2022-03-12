import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import MsgContainer from "../src/components/MsgContainer";

const Main = tw.div`
  flex
  flex-col
  justify-start
  max-h-screen
`;

const NavContainer = tw.div`
  flex
  justify-between
  bg-gray-700
  p-3
`;

const NavWith = tw.h1`
  text-3xl
  font-bold
  text-slate-200
`;

const NavMenuContainer = tw.div`
  flex
  justify-between
`;

const NavMenu = tw.h1`
  text-3xl
  font-bold
  mr-3
  text-slate-200
`;

const menus = [
  { id: 1, text: "Menu1" },
  { id: 2, text: "Menu2" },
  { id: 3, text: "Menu3" },
  { id: 4, text: "Menu4" },
];

const Home: NextPage = () => {
  return (
    <Main>
      <NavContainer>
        <NavWith>With</NavWith>
        <NavMenuContainer>
          {menus.map((menu) => (
            <NavMenu key={menu.id}>{menu.text}</NavMenu>
          ))}
        </NavMenuContainer>
      </NavContainer>
      <MsgContainer />
    </Main>
  );
};

export default Home;
