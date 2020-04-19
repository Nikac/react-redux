import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";

import { FlexDiv, StyledLink } from "./styled";
import Home from "./components/Home";
import Users from "./components/Users";
import theme from "./styled/theme";

const Nav = styled(FlexDiv)`
  border-bottom: 1px solid ${theme.colors.gray100};
  font-size: 1.5rem;
`;

function App() {
  return (
    <Router>
      <Nav
        flex="1"
        width="null"
        align="null"
        height="null"
        positionX="space-between"
        positionY="null"
      >
        <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/users">Users</StyledLink>
        <StyledLink to="/">Some</StyledLink>
      </Nav>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
