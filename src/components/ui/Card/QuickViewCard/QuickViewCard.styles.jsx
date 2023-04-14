import styled from "styled-components";

export const QuickViewCardContainer = styled.div`
  width: 216px;
  height: auto;
  border-radius: 12px;
  background-color: #ffffff;
`;

export const QuickViewCardContainerBgDark = styled(QuickViewCardContainer)`
  background-color: #2c2c2c;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin: 16px;
  color: #2c2c2c;
`;

export const ContentContainerBgDark = styled(ContentContainer)`
  color: #ffffff;
`;

export const Title = styled.span`
  font-family: "PTSans", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;
