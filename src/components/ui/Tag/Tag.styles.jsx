import styled from "styled-components";
import { Link } from "react-router-dom";

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 67px;
  height: 23px;
  background-color: #10a252;
  border-radius: 40px;
`;

export const TagLabel = styled(Link)`
  font-family: "PTSans", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 23px;
  color: #ffffff;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`;
