import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
// import logo from "./assets/img/logo.svg";
import { FlexDiv, StyledLink, StyledContainer } from "./styled";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import theme from "./styled/theme";

const Nav = styled(FlexDiv)`
  border-bottom: 1px solid ${theme.colors.gray100};
  font-size: 1.5rem;
  padding: 0.5rem;
`;

function App() {
  return (
    <Router>
      <Nav
        flex="1"
        width="null"
        direction="null"
        height="null"
        positionX="center"
        positionY="center"
      >
        <StyledContainer
          direction="null"
          positionX="space-around"
          positionY="center"
        >
          <StyledLink to="/home">Home</StyledLink>
          <StyledLink to="/users">Users</StyledLink>
          <StyledLink to="/">Some</StyledLink>
        </StyledContainer>
      </Nav>
      {/* <img src={logo} /> */}
      <StyledContainer
        direction="null"
        positionX="flex-start"
        positionY="center"
      >
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </StyledContainer>
    </Router>
  );
}

export default App;
