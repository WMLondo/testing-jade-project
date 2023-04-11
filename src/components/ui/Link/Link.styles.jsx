import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const handleColorValue = (color) => {
  switch (color) {
    case "primary":
      return `color: ${({ theme: { colors } }) => colors.neutralColorMax};`;
    case "secondary":
      return `color: ${({ theme: { colors } }) => colors.neutralColorMin100};`;
    case "tertiary":
      return `color: ${({ theme: { colors } }) => colors.primaryColor};;`;
    case "danger":
      return `color: ${({ theme: { colors } }) => colors.dangerColor}`;
    default:
      return `color: ${({ theme: { colors } }) => colors.primaryColor};;`;
  }
};

const globalLinkStyle = css`
  font-size: 13px;
  font-weight: 400;
  ${(props) => handleColorValue(props.color)}
  text-decoration: ${(props) => props.textDecoration || "none"};

  &:hover:enabled {
    color: ${({ theme: { colors } }) => colors.primaryColor500};
  }
  &:active {
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
  &:disabled :a[disabled] {
    color: var(--neutral-color-min-400);
  }
`;

export const StyleLink = styled(Link)`
  ${globalLinkStyle}
`;

export const StyleNavLink = styled(NavLink)`
  ${globalLinkStyle}
`;
