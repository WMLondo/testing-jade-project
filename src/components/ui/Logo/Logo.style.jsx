import styled from "styled-components";
import { Image } from "../Card/Card.styles";

export const Logo = styled(Image)`
  height: ${(props) => props.height || "180px"};
  width: ${(props) => props.width || "216px"};
  align-self: center;
`;
