import { Link } from "react-router-dom";
import styled from "styled-components";

export const GuideCardContainer = styled(Link)`
  cursor: pointer;
  width: 216px;
  height: 150px;
  padding: 16px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: "PTSans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  text-decoration: none;
  color:#2c2c2c
`;
