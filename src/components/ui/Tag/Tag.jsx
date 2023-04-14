import React from "react";
import { TagContainer,TagLabel } from "./Tag.styles";

const Tag = ({ url, children }) => {
  return (
    <TagContainer>
      <TagLabel to={url}>{children}</TagLabel>
    </TagContainer>
  );
};

export default Tag;
