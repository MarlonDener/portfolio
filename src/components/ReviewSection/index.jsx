import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Title from "../Title/Title";
import ReviewItem from "./ReviewItem";
const ReviewSection = () => {
  return (
    <ReviewStyled>
      <Title title={"Reviews"} span={"Reviews"}></Title>
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            Text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique repellendus corporis mollitia fuga soluta atque deserunt ipsam alias voluptates eveniet libero perferendis accusantium harum id incidunt enim, impedit ex repudiandae!"
            }
          />
          <ReviewItem
            Text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique repellendus corporis mollitia fuga soluta atque deserunt ipsam alias voluptates eveniet libero perferendis accusantium harum id incidunt enim, impedit ex repudiandae!"
            }
          />
        </div>
      </InnerLayout>
    </ReviewStyled>
  );
};

export default ReviewSection;

const ReviewStyled = styled.div`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    @media (max-width: 600px) {
      flex-direction: column;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
