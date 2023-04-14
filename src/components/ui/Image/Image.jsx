import React from "react";

import { ImageContainer } from "./Image.styles";

const Image = ({ width, height, borderRadius, url }) => {
  return (
    <ImageContainer
      style={{ width: width, height: height }}
      borderRadius={borderRadius}
      src={url}
    ></ImageContainer>
  );
};

export default Image;
