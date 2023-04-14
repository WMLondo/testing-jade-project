import React from "react";

import { ImageContainer } from "./Image.styles";

const Image = ({ width, height, borderRadius, url, alt }) => {
  return (
    <ImageContainer
      style={{ width: width, height: height }}
      borderRadius={borderRadius}
      src={url}
      alt={alt}
    ></ImageContainer>
  );
};

export default Image;
