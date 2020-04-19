import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import theme from "./theme";

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${theme.colors.gray100};
`;

export const StyledHeadingOne = styled.h1`
  padding: 2rem 0rem;
  color: ${theme.colors.gray100};
`;

export const StyledParagraph = styled.p`
  font-size: 1.4rem;
  font-family: "metropolisbold";
`;
