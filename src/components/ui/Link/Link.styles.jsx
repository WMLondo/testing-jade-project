import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const handleColorValue = (color) => {
  switch (color) {
    case "white":
      return `${({ theme: { colors } }) => colors.neutralColorMax};`;
    case "black":
      return `${({ theme: { colors } }) => colors.neutralColorMin};`;
    case "primary":
      return `${({ theme: { colors } }) => colors.primaryColor};`;
    case "danger":
      return `${({ theme: { colors } }) => colors.dangerColor};`;
    default:
      return `${({ theme: { colors } }) => colors.primaryColor}`;
  }
};

const globalLinkStyle = css`
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  font-weight: 400;
  color: ${(props) => handleColorValue(props.color)};
  text-decoration: ${(props) => props.textDecoration || "none"};

  &:hover:enabled {
    color: ${({ theme: { colors } }) => colors.primaryColor500};
    text-decoration: underline;
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

export const Tag = styled(Link)`
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  padding: 1px 21px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.neutralColorMax};
  text-decoration: ${(props) => props.textDecoration || "none"};
  background-color: ${(props) => props.bg || props.theme.colors.primaryColor};
  border-radius: 40px;

  &:hover:enabled {
    background-color: ${(props) => props.theme.colors.primaryColor300};
    text-decoration: underline ${(props) => props.theme.colors.neutralColorMax};
  }
  &:active {
    background-color: ${({ theme: { colors } }) => colors.primaryColor500};
  }
  &:disabled :a[disabled] {
    color: var(--neutral-color-min-400);
  }
`;
