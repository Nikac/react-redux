import styled from "styled-components/macro";
import theme from "./theme";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) =>
    props.positionX ? props.positionX : "flex-start"};
  align-items: ${(props) => (props.positionY ? props.positionY : "flex-start")};
  padding: 1.5rem;
`;

export const StyledContainerFluid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) =>
    props.positionX ? props.positionX : "flex-start"};
  align-items: ${(props) => (props.positionY ? props.positionY : "flex-start")};
  padding: 1.5rem;
`;

export const StyledBtn = styled.button`
  outline: none;
  padding: 0.3rem 0.6rem;
  border: 1px solid ${theme.colors.gray60};
  border-radius: 5px;
  background-color: ${theme.colors.blue10};
  margin: 0.5rem;
`;

export const StyledBtnDanger = styled(StyledBtn)`
  background-color: ${theme.colors.red100};
`;

export const StyledBtnSuccess = styled(StyledBtn)`
  background-color: ${theme.colors.orange100};
`;
