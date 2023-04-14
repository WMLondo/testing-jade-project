import React from "react";
import {
  ActionContainer,
  ContentContainer,
  PriceLabel,
  ProductCardContainer,
  ProductTitle,
} from "./ProductCard.styles";
import Image from "../../Image/Image";
import Button from "../../Button/Button";
import Tag from "../../Tag/Tag";
import RatingTag from "../../RatingTag/RatingTag";

const ProductCard = ({
  imgUrl,
  imgAlt,
  productBrand,
  productTitle,
  productPrice,
  buttonLabel,
}) => {
  return (
    <ProductCardContainer>
      <Image
        url={imgUrl}
        width="100%"
        height="202px"
        alt={imgAlt}
        borderRadius="12px 12px 0px 0px"
      />
      <ContentContainer>
        <Tag>{productBrand}</Tag>
        <ProductTitle>{productTitle}</ProductTitle>
        <RatingTag />
        <ActionContainer>
          <PriceLabel>L. {productPrice}</PriceLabel>
          <Button>{buttonLabel}</Button>
        </ActionContainer>
      </ContentContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
