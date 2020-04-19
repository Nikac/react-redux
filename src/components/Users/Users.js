import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components/macro";
import theme from "../../styled/theme";

import {
  FlexDiv,
  StyledHeadingOne,
  StyledParagraph,
  StyledBtn,
  StyledBtnDanger,
  StyledBtnSuccess,
} from "../../styled";
import { getUsers } from "../../store/actions/user.action";

const StyledLI = styled.li`
  list-style: none;
  padding: 1rem;
  border: 1px solid ${theme};
  font-family: ${theme.fonts.metropolisregular};
`;

const Users = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);
  const errMsg = useSelector((state) => state.usersReducer.errMsg);

  const loadUsers = async () => {
    await dispatch(getUsers());
  };

  useEffect(() => {
    loadUsers();
  }, [dispatch]);
  return (
    <FlexDiv
      flex="1"
      direction="column"
      width="100%"
      height="100%"
      positionY="center"
      positionX="flex-start"
    >
      <StyledHeadingOne>Users</StyledHeadingOne>
      <ul>
        {users &&
          users.map((user) => (
            <StyledLI key={user.id}>
              Name: {user.name} <StyledBtn>Edit</StyledBtn>
              <StyledBtnDanger>Delete</StyledBtnDanger>
              <StyledBtnSuccess>Details</StyledBtnSuccess>
            </StyledLI>
          ))}
        {errMsg && <StyledParagraph>{errMsg}</StyledParagraph>}
      </ul>
    </FlexDiv>
  );
};

export default Users;
