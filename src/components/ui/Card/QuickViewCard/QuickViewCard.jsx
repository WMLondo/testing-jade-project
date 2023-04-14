import React from "react";
import Tag from "../../Tag/Tag";
import Image from "../../Image/Image";
import Button from "../../Button/Button";
import {
  QuickViewCardContainer,
  Title,
  ContentContainer,
} from "./QuickViewCard.styles";

const QuickViewCard = ({ imageUrl, tagLabel, tagUrl, titleLabel }) => {
  return (
    <QuickViewCardContainer>
      <Image
        url={imageUrl}
        width="100%"
        height="150px"
        borderRadius="12px 12px 0px 0px"
      />
      <ContentContainer>
        <Tag url={tagUrl || "/"}>{tagLabel}</Tag>
        <Title>{titleLabel}</Title>
        <Button>VISTA RAPIDA</Button>
      </ContentContainer>
    </QuickViewCardContainer>
  );
};

export default QuickViewCard;
