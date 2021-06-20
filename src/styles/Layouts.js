import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 4rem;
  @media (max-width: 800px) {
    padding: 2rem;
  }
  @media (max-width: 400px) {
    padding: 0.8rem;
  }
`;

export const InnerLayout = styled.div`
  padding: 4rem 0;
  @media (max-width: 800px) {
    padding: 2rem 0;
  }
`;
