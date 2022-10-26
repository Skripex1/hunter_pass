import styled from '../../../../../../theme';

export const LtMobileContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const CarouselContainer = styled.div<{ sliding: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: ${props => (props.sliding ? 'none' : 'transform 0.3s ease')};
  transform: ${props => {
    if (!props.sliding) return '0';
    if (props.dir === 'PREV') return 'translateX(-100%)';
    return 'translateX(100%)';
  }};
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CarouselSlot = styled.div<{ order: number }>`
  width: 100%;
  margin: 60px;
  order: ${props => props.order};
  display: flex;
  flex-direction: column;
`;
