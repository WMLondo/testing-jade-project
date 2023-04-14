import React from "react";
import { GuideCardContainer } from "./GuideCard,styles";

const GuideCard = ({ path, children }) => {
  return <GuideCardContainer to={path || ""}>{children}</GuideCardContainer>;
};

export default GuideCard;
