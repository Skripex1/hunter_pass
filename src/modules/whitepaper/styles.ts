import styled from 'styled-components';

export const WhitePaperContainer = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex: 1;
  flex-direction: column;
  align-items: center;
  min-height: 1000px;
  background-color: #1a1a1a;
  gap: 25px;
`;

export const WhitePaperPageContainer = styled.img`
  @media (max-width: 800px) {
    width: 100%;
  }
`;
