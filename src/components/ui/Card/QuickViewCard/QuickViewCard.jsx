import React from "react";
import Tag from "../../Tag/Tag";
import Image from "../../Image/Image";
import Button from "../../Button/Button";
import {
  QuickViewCardContainer,
  QuickViewCardContainerBgDark,
  Title,
  ContentContainer,
  ContentContainerBgDark,
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
        <Tag url={tagUrl || "/"} w="67px" h="auto">
          {tagLabel}
        </Tag>
        <Title>{titleLabel}</Title>
        <Button>VISTA RAPIDA</Button>
      </ContentContainer>
    </QuickViewCardContainer>
  );
};

export const QuickViewCardBgDark = ({
  imageUrl,
  tagLabel,
  tagUrl,
  titleLabel,
}) => {
  return (
    <QuickViewCardContainerBgDark>
      <Image
        url={imageUrl}
        width="100%"
        height="150px"
        borderRadius="12px 12px 0px 0px"
      />
      <ContentContainerBgDark>
        <Tag url={tagUrl || "/"} w="67px" h="auto">
          {tagLabel}
        </Tag>
        <Title>{titleLabel}</Title>
        <Button>VISTA RAPIDA</Button>
      </ContentContainerBgDark>
    </QuickViewCardContainerBgDark>
  );
};

export default QuickViewCard;
