import styled from "styled-components";

export const Card = styled.div`
  width: ${(props) => props.width || "330px"};
  height: ${(props) => props.height || "405px"};
  box-shadow: ${(props) =>
    props.enabledBoxShadow ? "0px 0px 25px rgba(0, 0, 0, 0.25);" : ""};
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItem};
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bg};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border || ""};
  border-radius: ${(props) => props.borderRadius};
`;

export const Image = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "216px"};
  box-shadow: ${(props) =>
    props.enabledBoxShadow ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : ""};
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alingItem};
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bg};
  margin: ${(props) => props.margin};
`;
