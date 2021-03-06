import styled from "styled-components/macro";
import theme from "../styled/theme";

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.align ? props.align : "row")}
  flex: ${(props) => (props.flex ? props.flex : 1)};
  width: ${(props) => (props.width ? props.width : 0)};
  height: ${(props) => (props.height ? props.height : 0)};
  padding: 1.5em;
  justify-content: ${(props) => (props.positionX ? props.positionX : "center")};
  align-items: ${(props) => (props.positionY ? props.positionY : "center")};
`;

export const FlexColumn = styled.div`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : 1)};
  width: ${(props) => (props.width ? props.width : 0)};
  height: ${(props) => (props.height ? props.height : 0)};
  padding: 1.5em;
  flex-direction: column;
  justify-content: ${(props) => (props.positionX ? props.positionX : "center")};
  align-items: ${(props) => (props.positionY ? props.positionY : "center")};
`;
