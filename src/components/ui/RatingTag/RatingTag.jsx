import React from "react";
import { RatingContainer, Star, TagCount } from "./RatingTag.styles";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const dummyData = [
  {
    stars: [
      { key: "value", value: true },
      { key: "value2", value: true },
      { key: "value3", value: false },
      { key: "value4", value: false },
      { key: "value5", value: false },
    ],
    userRatingCount: 2,
  },
];

const RatingTag = ({ rating }) => {
  return (
    <RatingContainer>
      {dummyData.map((rate) => {
        return rate.stars.map((star) => {
          return (
            <Star key={star.key}>
              {star.value ? <AiFillStar /> : <AiOutlineStar />}
            </Star>
          );
        });
      })}
      <TagCount>({dummyData.userRatingCount || 0})</TagCount>
    </RatingContainer>
  );
};

export default RatingTag;
