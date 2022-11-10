import React from "react";
import styled from "styled-components";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className="loading-img" alt="loding" />
      </main>
    );
  }
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
