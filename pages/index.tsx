import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import MsgContainer from "../src/components/MsgContainer";
import NavContainer from "../src/components/NavContainer";
import { RecoilRoot } from "recoil";
import Layout from "../src/components/Layout";

const Main = tw.div`
  flex
  flex-col
  justify-start
  max-h-screen

`;

const Home: NextPage = () => {
  return (
    <RecoilRoot>
      <Main>
        <MsgContainer />
      </Main>
    </RecoilRoot>
  );
};

export default Home;
