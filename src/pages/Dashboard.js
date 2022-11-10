import React from "react";
import styled from "styled-components";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";

const Dashboard = () => {
  return (
    <Wrapper>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  /* display: grid;
  place-items: center; */
  background: var(--clr-grey-1);
`;

export default Dashboard;
