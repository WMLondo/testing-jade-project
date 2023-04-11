import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const handleColorValue = (color) => {
  switch (color) {
    case "primary":
      return `color: var(--primary-color);`;
    case "secondary":
      return `color: var(--secondary-color);`;
    case "tertiary":
      return `color: var(--tertiary-color);`;
    case "danger":
      return `color: var(--danger-color);`;
    default:
      return `color: var(--tertiary-color);`;
  }
};

const globalLinkStyle = css`
  font-size: 13px;
  font-weight: 400;
  ${(props) => handleColorValue(props.color)}
  text-decoration: ${(props) => (props.textDecoration || "none")};

  &:hover:enabled {
    color: var(--tertiary-color-hs);
  }
  &:active {
    color: var(--tertiary-color);
  }
  &:disabled :a[disabled] {
    color: var(--secondary-color-bl);
  }
`;

export const StyleLink = styled(Link)`
  ${globalLinkStyle}
`;

export const StyleNavLink = styled(NavLink)`
  ${globalLinkStyle}
`;
