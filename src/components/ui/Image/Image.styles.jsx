import styled from "styled-components";

export const ImageContainer = styled.img`
  width: 300px;
  height: 300px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: ${({ borderRadius }) => `${borderRadius}` || ""};
`;
